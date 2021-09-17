import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

const Header = (props) => {


    return(
        <div className="header">
            <div className="header__item">
                <NavLink to="/">
                    <h1 className="header__title">Cargo Planner</h1>
                </NavLink>
            </div>
            <div className="header__item">
                <div className="header__input">
                    <div className="search">
                        <FiSearch />
                    </div>
                    <input placeholder="Search" value={props.keyword} onChange={(e) => {props.search(e.target.value)}}/>
                </div>
            </div>
            <div className="header__item">
                <div className="header__controls">
                    <button
                        className="button"
                        onClick={() => props.loadShipments()} 
                        type="button">
                        Load
                    </button>
                    <button 
                        className="button"
                        onClick={() => props.saveShipments()}
                        type="button">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header