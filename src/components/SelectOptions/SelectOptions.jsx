/* eslint-disable react/prop-types */
import "./SelectOptions.css";
function SelectOptions({ currencies, isOpen, otherSelection, handleSelect }) {
  return (
    <div className={`option-wrap ${isOpen ? "open" : ""}`}>
      <ul className='option'>
        {currencies.map((currency, index) => (
          <li
            className={`option-item ${
              currency.code === otherSelection.code ? "disabled" : ""
            }`}
            key={index}
            onClick={() => handleSelect(index)}
          >
            {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectOptions;
