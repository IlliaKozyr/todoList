import "./style.css";
import React from "react";

export const PaginationComponent = ({
    todosPerPage,
    totalTodos,
    currentPage,
    setCurrentPage,
}) => {
    const pagesNumber = [];

    console.log(totalTodos)

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pagesNumber.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);
    const nextPagePlusTen = () => setCurrentPage((prev) => prev + 10);
    const nextPageMinusTen = () => setCurrentPage((prev) => prev + 10);

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
                {drawingLi(pagesNumber[0])}
                {currentPage >= 5 ? <li className="threeDots" onClick={nextPageMinusTen}>...</li> : null}
                {currentPage >= 5 ? null : drawingLi(pagesNumber[1])}
                {currentPage >= 6 ? null : drawingLi(pagesNumber[2])}
                {currentPage >= 7 ? null : drawingLi(pagesNumber[3])}

                


                {pagesNumber.map((number) =>
                    (number < 6 && number > 4) && currentPage < 8 ?
                    drawingLi(number) : null
                )}

                {console.log(currentPage)}
                    
                

                {pagesNumber.map((number) =>
                    number < 6 ||
                    number === Math.ceil(totalTodos / 10) ||
                    (currentPage !== number &&
                        currentPage + 1 !== number && currentPage + 2 !== number &&
                        currentPage - 1 !== number &&
                        currentPage - 2 !== number) ? null : (
                            drawingLi(number)
                    )
                )}

                {currentPage < Math.ceil(totalTodos / 10) - 3 ? (
                    <li className="threeDots" onClick={nextPagePlusTen}>...</li>
                ) : null}

                <li className="pageItem" key={totalTodos}>
                    <button
                        // href="#"
                        className={
                            currentPage === Math.ceil(totalTodos / 10) ? "active buttonInLi" : "page-link buttonInLi"
                        }
                        onClick={() => paginate(Math.ceil(totalTodos / 10))}
                    >
                        {Math.ceil(totalTodos / 10)}
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
