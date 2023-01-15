import "./style.css";
import React from "react";

export const PaginationComponent = ({
    todosPerPage,
    totalTodos,
    currentPage,
    setCurrentPage,
}) => {
    const pagesNumber = [];

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pagesNumber.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    const drawingLi = (numberPage) => {
        return(
            <li className="pageItem" key={numberPage}>
                    <button
                        className={
                            currentPage === numberPage
                                ? "active buttonInLi"
                                : "page-link buttonInLi"
                        }
                        onClick={() => paginate(numberPage)}
                    >
                        {numberPage}
                    </button>
                </li>
        )
    }

    const paginationMoreThan5Pages = () => {
        return (
            <div className="df">
                {pagesNumber.map((number) =>
                    number < 6 ?
                    drawingLi(number) : null
                )}

                {currentPage > 7 ? <li className="threeDots">...</li> : null}

                {pagesNumber.map((number) =>
                    number < 6 ||
                    number === totalTodos ||
                    (currentPage !== number &&
                        currentPage + 1 !== number &&
                        currentPage - 1 !== number) ? null : (
                            drawingLi(number)
                    )
                )}

                {currentPage < totalTodos - 2 ? (
                    <li className="threeDots">...</li>
                ) : null}
                <li className="pageItem" key={totalTodos}>
                    <button
                        // href="#"
                        className={
                            currentPage === totalTodos ? "active buttonInLi" : "page-link buttonInLi"
                        }
                        onClick={() => paginate(totalTodos)}
                    >
                        {totalTodos}
                    </button>
                </li>
            </div>
        );
    };

    const paginationLessThan5Pages = () => {
        return pagesNumber.map((number) => (
            drawingLi(number)
        ));
    };

    return (
        <div className="paginationBlock">
            <ul className="pagination">
                <li>
                    <button
                        // href="#"
                        className={
                            pagesNumber.length <= 1
                                ? "displayNone"
                                : "displayBlock buttonInLi" && currentPage === 1
                                ? "disabled buttonInLi"
                                : "buttonInLi"
                        }
                        onClick={prevPage}
                    >
                        ❮
                    </button>
                </li>

                {pagesNumber.length > 6
                    ? paginationMoreThan5Pages()
                    : paginationLessThan5Pages()}

                <li>
                    <button
                        // href="#"
                        className={
                            pagesNumber.length <= 1
                                ? "displayNone"
                                : "displayBlock buttonInLi" &&
                                  pagesNumber.length === currentPage
                                ? "disabled buttonInLi"
                                : "buttonInLi"
                        }
                        onClick={nextPage}
                    >
                        ❯
                    </button>
                </li>
            </ul>
        </div>
    );
};
