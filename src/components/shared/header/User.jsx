import React from 'react'
import {NavLink} from "react-router-dom";
import Avatar from "../../user/Avatar";
import avatar from "../../../assets/img/shared/avatar-1.png"

function User() {
    return (
        <div className="header__user">
            <NavLink className="user" to="/home">
                <div className="user__wrapper">
                    <Avatar className="user__avatar-img" avatar={avatar}/>
                    <h3 className="user__name">Julia Harris</h3>
                </div>
            </NavLink>

            <button className="header__logout-button">
                <svg className="icon-gray" width="18" height="18" viewBox="0 0 18 18"
                     fill="#646464"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.97012 16.4751H2.24251C1.82988 16.4751 1.49502 16.1402 1.49502 15.7276V2.27245C1.49502 1.85983 1.82992 1.52496 2.24251 1.52496H8.97012C9.38348 1.52496 9.71761 1.19084 9.71761 0.77747C9.71761 0.364103 9.38348 0.0299072 8.97012 0.0299072H2.24251C1.00614 0.0299072 0 1.03608 0 2.27245V15.7276C0 16.964 1.00614 17.9701 2.24251 17.9701H8.97012C9.38348 17.9701 9.71761 17.636 9.71761 17.2226C9.71761 16.8092 9.38348 16.4751 8.97012 16.4751Z"/>
                    <path
                        d="M17.7773 8.46784L13.2324 3.98278C12.9394 3.69274 12.4655 3.6965 12.1754 3.99027C11.8854 4.28403 11.8884 4.7572 12.1829 5.04724L15.4308 8.25254H6.72759C6.31423 8.25254 5.9801 8.58667 5.9801 9.00003C5.9801 9.4134 6.31423 9.74756 6.72759 9.74756H15.4308L12.1829 12.9529C11.8884 13.2429 11.8862 13.7161 12.1754 14.0098C12.3219 14.1578 12.5148 14.2326 12.7077 14.2326C12.8976 14.2326 13.0874 14.1608 13.2324 14.0173L17.7773 9.53223C17.9193 9.39171 18 9.20032 18 9C18 8.79975 17.92 8.60913 17.7773 8.46784Z"/>
                </svg>
            </button>
        </div>
    )
}

export default User;

