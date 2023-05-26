import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

export default function Nav(props) {
return(
    <div className={style.container}>
        <NavLink to="/About">
        <button> About </button>
        </NavLink>
        <NavLink to="/Home">
        <button> Home </button>
        </NavLink>
        <SearchBar
            onSearch={props.onSearch}
        />
    </div>
)
}