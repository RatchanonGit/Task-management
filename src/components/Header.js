import "./Header.css";
import { BsFillSunFill,BsFillMoonStarsFill} from "react-icons/bs";
export default function Header(props) {
    const { theme, setTheme } = props

    function ToggleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "light" : "dark"}</span>
                <span className="icon" onClick={ToggleTheme}>{
                theme === "light" ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}</span>
            </div>
        </header>
    )
}