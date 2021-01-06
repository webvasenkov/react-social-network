import React from 'react'

function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__button pagination__button-prev">

            </div>
            <ul className="pagination__list">
                <li className="pagination__page-number pagination__page-number_selected">1</li>
                <li className="pagination__page-number">2</li>
                <li className="pagination__page-number">3</li>
                <li className="pagination__page-number">4</li>
                <li className="pagination__page-number">5</li>
            </ul>
            <div className="pagination__button pagination__button-next">

            </div>
        </div>
    )
}

export default Pagination;