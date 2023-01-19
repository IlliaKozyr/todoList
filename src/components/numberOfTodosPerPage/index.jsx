import "./style.css"


export const NumberOfTodosPerPage = ({setTodosPerPage, setCurrentPage}) => {

    const select = document.getElementById("selectNumberOfTodosPerPage");

    return(
        <select id="selectNumberOfTodosPerPage" onChange={() => {setTodosPerPage(select.value); setCurrentPage(1)}} defaultValue={"10"}>
            <option value="10">10 / page</option>
            <option value="25">25 / page</option>
            <option value="50">50 / page</option>
            <option value="100">100 / page</option>
        </select>
    )
}