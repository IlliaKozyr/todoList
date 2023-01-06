import "./style.css"
import React from "react"

export const PaginationComponent = ({ todosPerPage, totalTodos, currentPage, setCurrentPage }) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i ++) {
        pageNumber.push(i)
    }

    console.log(pageNumber)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    return(
        <div className="paginationBlock">
            <ul className="pagination">
                <li><a href="!#" className={pageNumber.length <= 1 ? "displayNone" : "displayBlock" && currentPage === 1 ? "disabled" : ""}  onClick={prevPage}>❮</a></li>
                {
                    pageNumber.map(number =>(
                        <li className="pageItem" key={number}>
                            <a href="!#" className={currentPage === number ? "active" : "page-link"} onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                <li><a href="!#" className={pageNumber.length <= 1 ? "displayNone" : "displayBlock" && pageNumber.length === currentPage ? "disabled" : ""} onClick={nextPage}>❯</a></li>
            </ul>
        </div>
    )
}