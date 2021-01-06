import React from 'react'

function Form() {
    return (
        <form className="messenger__form">
            <textarea className="messenger__form-textarea" placeholder="Write a message..." rows="1"/>
            <button className="messenger__form-button">
                <svg className='icon-gray' width="19" height="21" viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg" fill="#646464">
                    <path d="M1.89585 14.4583C1.16668 16.4375 0.750014 17.7917 0.54168 18.5208C-0.0833197 21.0208 -0.499986 21.5417 1.68751 20.3958C3.87501 19.25 14.1875 13.4167 16.5833 12.1667C19.6042 10.5 19.6042 10.6042 16.375 8.83332C13.9792 7.37499 3.66668 1.74999 1.79168 0.604155C-0.0833199 -0.541678 0.020847 -0.0208445 0.54168 2.47916C0.750014 3.31249 1.16668 4.66665 1.89585 6.54165C2.41668 7.89582 3.56251 8.93749 5.02085 9.14582L11.0625 10.2917C11.1667 10.2917 11.1667 10.3958 11.1667 10.3958C11.1667 10.3958 11.1667 10.5 11.0625 10.5L5.02085 11.6458C3.66668 12.0625 2.41668 13 1.89585 14.4583Z"/>
                </svg>
            </button>
        </form>
    )
}

export default Form;