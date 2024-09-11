import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useThemeContext } from "../context/ThemeContext";

function SwippDarkLight() {
  const { handleToggle, darkSide } = useThemeContext();

  return (
    <DarkModeSwitch
      style={{ margin: "4px" }}
      onChange={handleToggle}
      checked={darkSide}
      size={33}
      moonColor="yellow"
      sunColor="#000"
    />
  );
}

export default SwippDarkLight;
