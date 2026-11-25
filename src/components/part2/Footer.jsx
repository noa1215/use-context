import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default  function Footer(){
    const {theme}=useContext(ThemeContext)

    return <h3>theme: {theme}</h3>
}