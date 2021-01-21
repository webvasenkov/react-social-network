import React from 'react'
import classNames from 'classnames'

function Pagination({className, totalUsers, numberUsersOnePage, setCurrentPage, currentPage}) {
    function setPagesNumbers() {
        const totalPages = Math.round(totalUsers / numberUsersOnePage)
        return new Array(totalPages)
            .fill('')
            .map((_, i) => {
                let pageNumber = ++i
                return (
                    <li
                        className={classNames("pagination__page-number", {"pagination__page-number_selected": currentPage === pageNumber})}
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}>
                        {pageNumber}
                    </li>)
            })
    }

    function createPagination(pagesNumbers, size) {
        return pagesNumbers.slice(0, size)
    }

    const pagesNumbers = setPagesNumbers()
    const pagination = createPagination(pagesNumbers, 5)

    return (
        <div className={classNames('pagination', className)}>
            <div className="pagination__wrapper">
                <svg className="pagination__button pagination__button-prev pagination__button_disabled" width="18"
                     height="12" viewBox="0 0 18 12"
                     fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.109863 6.26516L5.73486 11.8902C5.88136 12.0367 6.11866 12.0367 6.26513 11.8902C6.41162 11.7437 6.41162 11.5064 6.26513 11.3599L1.28025 6.37502L17.625 6.37502C17.8323 6.37502 18 6.20729 18 6.00001C18 5.79273 17.8323 5.625 17.625 5.625L1.28025 5.625L6.26513 0.640164C6.41162 0.493669 6.41162 0.256365 6.26513 0.109904C6.19189 0.0366735 6.09592 4.1008e-05 5.99998 4.1008e-05C5.90403 4.1008e-05 5.80809 0.0366735 5.73483 0.109904L0.109827 5.7349C-0.0366325 5.88136 -0.0366325 6.11867 0.109863 6.26516Z"/>
                </svg>
                <ul className="pagination__list">
                    {pagination}
                </ul>
                <svg className="pagination__button pagination__button-next pagination__button_enabled" width="18"
                     height="12" viewBox="0 0 18 12"
                     fill="#FFF" xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.8901 5.73484L12.2651 0.109841C12.1186 -0.0366545 11.8813 -0.0366545 11.7349 0.109841C11.5884 0.256337 11.5884 0.493642 11.7349 0.640103L16.7198 5.62498H0.375012C0.16773 5.62498 0 5.79271 0 5.99999C0 6.20727 0.16773 6.375 0.375012 6.375H16.7198L11.7349 11.3598C11.5884 11.5063 11.5884 11.7436 11.7349 11.8901C11.8081 11.9633 11.9041 12 12 12C12.096 12 12.1919 11.9633 12.2652 11.8901L17.8902 6.2651C18.0366 6.11864 18.0366 5.88133 17.8901 5.73484Z"/>
                </svg>
            </div>
        </div>
    )
}

export default Pagination;