/* eslint-disable react/prop-types */
function CurrencyInput({ value, onChange, onFocus, onBlur, inputRef }) {
  return (
    <>
      <input
        className='input-from'
        type='text'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
      />
    </>
  );
}

export default CurrencyInput;
