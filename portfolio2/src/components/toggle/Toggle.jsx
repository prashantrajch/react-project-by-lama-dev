import Sun from "../../assets/icon/sun.png";
import Moon from "../../assets/icon/moon.png";
import { useContext } from "react";
import "./toggle.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="sun" className="t-icon" />
      <img src={Moon} alt="moon" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 25 : 0 }}
      ></div>
    </div>
  );
};

export default Toggle;
