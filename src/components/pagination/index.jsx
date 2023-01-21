import "./style.css";
import React from "react";

export const PaginationComponent = ({
    totalTodos,
    currentPage,
    setCurrentPage,
    numberOfPages,
}) => {
    const pagesNumber = [];

    for (let i = 1; i <= numberOfPages; i++) {
        pagesNumber.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);
    const nextPagePlusTen = () => setCurrentPage((prev) => numberOfPages - prev >= 5 ? prev + 5 : prev + (numberOfPages - prev));
    const nextPageMinusTen = () => setCurrentPage((prev) => prev - 5 <= 0 ? prev - 4 : prev - 5);

    const drawingLi = (numberPage) => {
        return (
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
        );
    };

    const paginationMoreThan5Pages = () => {
        return (
            <div className="dflex">
                {drawingLi(pagesNumber[0])}
                {currentPage >= 5 ? (
                    <li className="threeDotsMinus5" onClick={nextPageMinusTen} defaultText="..." hoverText=" « ">
                    </li>
                ) : null}
                {currentPage >= 5 ? null : drawingLi(pagesNumber[1])}
                {currentPage >= 6 ? null : drawingLi(pagesNumber[2])}
                {currentPage >= 7 ? null : drawingLi(pagesNumber[3])}

                {pagesNumber.map((number) =>
                    number < 6 && number > 4 && currentPage < 8
                        ? drawingLi(number)
                        : null
                )}

                {pagesNumber.map((number) =>
                    number < 6 ||
                    number === numberOfPages ||
                    (currentPage !== number &&
                        currentPage + 1 !== number &&
                        currentPage + 2 !== number &&
                        currentPage - 1 !== number &&
                        currentPage - 2 !== number)
                        ? null
                        : drawingLi(number)
                )}

                {currentPage < numberOfPages - 3 ? (
                    <li className="threeDotsPlus5" onClick={nextPagePlusTen} defaultText="..." hoverText=" » ">
                    </li>
                ) : null}

                <li className="pageItem" key={totalTodos}>
                    <button
                        className={
                            currentPage === numberOfPages
                                ? "active buttonInLi"
                                : "page-link buttonInLi"
                        }
                        onClick={() => paginate(numberOfPages)}
                    >
                        {numberOfPages}
                    </button>
                </li>
            </div>
        );
    };

    const paginationLessThan5Pages = () => {
        return pagesNumber.map((number) => drawingLi(number));
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
