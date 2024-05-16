/* eslint-disable react-hooks/exhaustive-deps */
import { DateTime } from "luxon";
import { useState, useEffect, useRef } from "react";
import flagForCurrencies from "./flagForCurrencies";
import useLocalStorage from "use-local-storage";

import "./App.css";

import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect/CurrencySelect";
import SelectOptions from "./components/SelectOptions/SelectOptions";
import Buttons from "./components/Buttons/Buttons";
import Chart from "./components/Chart";

function App() {
  const dt = DateTime.now();
  // recupero data precedente di un mese a oggi
  const [dateTarget, setDateTarget] = useState(
    dt.minus({ months: 1 }).toISODate()
  );

  //valore del primo campo di input
  const [inputFrom, setInputFrom] = useState(1);

  //valor del secondo campo di input
  const [inputTo, setInputTo] = useState("");

  const inputFromRef = useRef(null);

  const inputToRef = useRef(null);

  //elenco delle option del primo select
  const [currenciesTo, setCurrenciesTo] = useState([]);

  //elenco delle option del secondo select
  const [currenciesFrom, setCurrenciesFrom] = useState([]);

  //valore dell'andamento monetario
  const [currencyTimeSeries, setCurrencyTimeSeries] = useState([]);

  //valore del primo select
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState({
    code: "EUR",
    name: "Euro",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/eur.svg",
  });

  //valore del secondo select
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState({
    code: "USD",
    name: "United States Dollar",
    flag: "https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/usd.svg",
  });

  //varifica del focus del primo input e della prima select
  const [isInputFromFocused, setIsInputFromFocused] = useState(true);

  //varifica del focus del secondo input e della seconda select
  const [isInputToFocused, setIsInputToFocused] = useState(false);

  //apre o chiude la select associata al primo input
  const [isOpenFrom, setIsOpenFrom] = useState(false);

  //apre o chiude la select associata al secondo input
  const [isOpenTo, setIsOpenTo] = useState(false);

  const [isChangedFrom, setIsChangedFrom] = useState(false);

  const [isChangedTo, setIsChangedTo] = useState(false);

  const [buttonActive, setButtonActive] = useState(1);

  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  document.body.dataset.theme = isDark ? "dark" : "light";

  //funzione per impostare il focus sul primo input
  const handleFocusFrom = () => {
    setIsInputFromFocused(true);
    setIsInputToFocused(false);
    setIsChangedTo(false);
  };

  //funzione per impostare il focus sul secondo input
  const handleFocusTo = () => {
    setIsInputToFocused(true);
    setIsInputFromFocused(false);
    setIsChangedFrom(false);
  };

  //funzione per disattivare il focus sul primo input
  const handleBlurFrom = () => {
    setIsInputFromFocused(false);
    setIsOpenFrom(false);
  };

  //funzione per disattivare il focus sul secondo input
  const handleBlurTo = () => {
    setIsInputToFocused(false);
    setIsOpenTo(false);
  };

  //funzione per aggiornare il valore del primo input
  const handleChangeFrom = (e) => {
    setInputFrom(e.target.value);
  };

  //funzione per aggiornare il valore della prima select
  const handleSelectFrom = (index) => {
    setSelectedCurrencyFrom(currenciesFrom[index]);
    setIsOpenFrom(false);
    setIsChangedFrom(true);
    setIsChangedTo(false);
  };

  //funzione per aggiornare il valore del secondo input
  const handleChangeTo = (e) => {
    setInputTo(e.target.value);
  };

  //funzione per aggiornare il valore della seconda select
  const handleSelectTo = (index) => {
    setSelectedCurrencyTo(currenciesFrom[index]);
    setIsOpenTo(false);
    setIsChangedTo(true);
    setIsChangedFrom(false);
  };

  // Funzione per aggionare la data di riferimento per vedere l'andamento monetario
  const handleTimeSeries = (months) => {
    setDateTarget(dt.minus({ months: `${months}` }).toISODate());
    setButtonActive(months);
  };

  // Funzione per aprire le option della select associata al primo input
  const toggleOptionSelectFrom = () => {
    setIsOpenFrom(!isOpenFrom);
    setIsOpenTo(false);
    inputFromRef.current.focus();
  };

  // Funzione per aprire le option della select associata al secondo input
  const toggleOptionSelectTo = () => {
    setIsOpenTo(!isOpenTo);
    setIsOpenFrom(false);
    inputToRef.current.focus();
  };

  // Funzione per cambiare il tema
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Funzione per recuperare i dati delle valute
  const fetchCurrenciesCodes = async () => {
    try {
      const response = await fetch("https://api.frankfurter.app/currencies");
      const data = await response.json();

      const codeCurrencies = Object.keys(data);

      const flags = flagForCurrencies
        .filter((obj) => codeCurrencies.includes(obj.code))
        .map((obj) => {
          return {
            code: obj.code,
            name: obj.name,
            flag: obj.flag,
          };
        });

      setCurrenciesTo(flags);
      setCurrenciesFrom(flags);
    } catch (error) {
      console.error("Errore nel recupero dei dati delle valute:", error);
    }
  };

  // Funzione per eseguire la conversione valutaria da "inputFrom" a "inputTo"
  const fetchAmountFrom = async () => {
    if (
      (isInputFromFocused || isChangedFrom) &&
      (inputFrom !== "" || isNaN(!inputFrom))
    ) {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${inputFrom}&from=${selectedCurrencyFrom.code}&to=${selectedCurrencyTo.code}`
        );
        const data = await response.json();

        setInputTo(data.rates[selectedCurrencyTo.code]);
      } catch (error) {
        console.error("Errore nella conversione valutaria:", error);
      }
    }
  };

  // Funzione per eseguire la conversione valutaria da "inputTo" a "inputFrom"
  const fetchAmountTo = async () => {
    if (
      (isInputToFocused || isChangedTo) &&
      (inputTo !== "" || isNaN(!inputTo))
    ) {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${inputTo}&from=${selectedCurrencyTo.code}&to=${selectedCurrencyFrom.code}`
        );
        const data = await response.json();

        setInputFrom(data.rates[selectedCurrencyFrom.code]);
      } catch (error) {
        console.error("Errore nella conversione valutaria:", error);
      }
    }
  };

  // Funzione per recuperare l'andamento monetario
  const fetchTimeSeries = async () => {
    try {
      const response = await fetch(
        `https://api.frankfurter.app/${dateTarget}..?from=${selectedCurrencyFrom.code}&to=${selectedCurrencyTo.code}`
      );
      const data = await response.json();

      const dates = Object.keys(data.rates);
      setCurrencyTimeSeries(
        dates.map((date) => {
          return {
            date: date,
            value: data.rates[date][selectedCurrencyTo.code],
          };
        })
      );
      // console.log(currencyTimeSeries);
    } catch (error) {
      console.error("Errore nel calcolo dell'andamento monetario:", error);
    }
  };

  // Funzione per formattare la valuta
  const currencyFormat = (value, code) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: code,
    }).format(value);
  };

  useEffect(() => {
    fetchCurrenciesCodes();
  }, []);

  useEffect(() => {
    fetchAmountFrom();
  }, [inputFrom, selectedCurrencyFrom]);

  useEffect(() => {
    fetchAmountTo();
  }, [inputTo, selectedCurrencyTo]);

  useEffect(() => {
    fetchTimeSeries();
  }, [selectedCurrencyFrom, selectedCurrencyTo, dateTarget]);

  return (
    <main className='main'>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <section className='converter'>
        <div className='container wrapper'>
          <h1 className='title'>Currency Converter</h1>
          <div className='conversion'>
            <span className='currency-from'>
              {currencyFormat(inputFrom, selectedCurrencyFrom.code)}
            </span>
            <span className='equal-to'> = </span>
            <span className='currency-to'>
              {currencyFormat(inputTo, selectedCurrencyTo.code)}
            </span>
          </div>
          <div className='input-from-group'>
            <CurrencyInput
              value={inputFrom}
              onChange={handleChangeFrom}
              onFocus={handleFocusFrom}
              onBlur={handleBlurFrom}
              inputRef={inputFromRef}
            />

            <div className='separator'></div>

            <CurrencySelect
              selectedCurrency={selectedCurrencyFrom}
              onSelect={handleSelectFrom}
              isOpen={isOpenFrom}
              toggleOpen={toggleOptionSelectFrom}
              currencies={currenciesFrom}
              handleselect={handleSelectFrom}
            />

            <SelectOptions
              currencies={currenciesFrom}
              isOpen={isOpenFrom}
              selectedCurrency={selectedCurrencyFrom}
              otherSelection={selectedCurrencyTo}
              handleSelect={handleSelectFrom}
            />
          </div>
          <div className='input-to-group'>
            <CurrencyInput
              type='text'
              value={inputTo}
              onChange={handleChangeTo}
              onFocus={handleFocusTo}
              onBlur={handleBlurTo}
              inputRef={inputToRef}
            />

            <div className='separator'></div>

            <CurrencySelect
              selectedCurrency={selectedCurrencyTo}
              onSelect={handleSelectTo}
              isOpen={isOpenTo}
              toggleOpen={toggleOptionSelectTo}
            />

            <SelectOptions
              currencies={currenciesTo}
              isOpen={isOpenTo}
              selectedCurrency={selectedCurrencyTo}
              otherSelection={selectedCurrencyFrom}
              handleSelect={handleSelectTo}
            />
          </div>

          <Buttons
            buttonActive={buttonActive}
            handleTimeSeries={handleTimeSeries}
          />

          <Chart
            currencyTimeSeries={currencyTimeSeries}
            selectedCurrencyFrom={selectedCurrencyFrom}
            selectedCurrencyTo={selectedCurrencyTo}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
