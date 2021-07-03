import React,{useContext} from "react"
import ThemeContext from "../Context/ThemeContext"


const ThemeToggler=()=>{
    const [themeMode,setThemeMode]=useContext(ThemeContext);


    return(
        <div onclick={()=>{
            setThemeMode(themeMode==="light"? "dark" : "light")
        }}>
        </div>
    )

}


export default ThemeToggler;