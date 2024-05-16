/* eslint-disable react/prop-types */
import "./ThemeToggle.css";
function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <div className='theme' onClick={toggleTheme}>
      {!isDark && (
        <>
          <p className='text'>Switch to Dark Mode</p>
          <span className='icon'>
            <i className='fa-solid fa-moon'></i>
          </span>
        </>
      )}

      {isDark && (
        <>
          <p className='text'>Switch to Ligth Mode</p>
          <span className='icon'>
            <i className='fa-solid fa-sun'></i>
          </span>
        </>
      )}
    </div>
  );
}

export default ThemeToggle;
