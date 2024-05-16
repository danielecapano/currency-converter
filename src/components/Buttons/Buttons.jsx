/* eslint-disable react/prop-types */
import "./Buttons.css";

function Buttons({ buttonActive, handleTimeSeries }) {
  return (
    <div className='buttons'>
      <button
        className={`btn ${buttonActive === 1 ? "active" : ""}`}
        onClick={() => handleTimeSeries(1)}
      >
        Ultimo Mese
      </button>
      <button
        className={`btn ${buttonActive === 3 ? "active" : ""}`}
        onClick={() => handleTimeSeries(3)}
      >
        Ultimi 3 mesi
      </button>
      <button
        className={`btn ${buttonActive === 6 ? "active" : ""}`}
        onClick={() => handleTimeSeries(6)}
      >
        Ultimi 6 mesi
      </button>
      <button
        className={`btn ${buttonActive === 12 ? "active" : ""}`}
        onClick={() => handleTimeSeries(12)}
      >
        Ultimo anno
      </button>
    </div>
  );
}

export default Buttons;
