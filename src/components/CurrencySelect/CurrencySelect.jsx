/* eslint-disable react/prop-types */
import "./CurrencySelect.css";
function CurrencySelect({ toggleOpen, selectedCurrency, isOpen, children }) {
  return (
    <div className='select' onClick={toggleOpen}>
      <img
        className='flag'
        src={selectedCurrency.flag}
        alt={selectedCurrency.code}
      />

      <p>{selectedCurrency.name}</p>
      <span className={`arrow ${isOpen ? "open" : ""}`}>
        <i className='fa-solid fa-chevron-down'></i>
      </span>
      {children}
    </div>
  );
}

export default CurrencySelect;
