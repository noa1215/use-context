import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
export default function Header(){
    const { toggleTheme } = useContext(ThemeContext)

    return(
        <>
        <h1>theme</h1>

        <button onClick={toggleTheme}>change mode</button>
        </>
    )
}