import "./style.css"

export const NumberOfTodosPerPage = ({setTodosPerPage}) => {

    const select = document.getElementById("selectNumberOfTodosPerPage");

    return(
        <select id="selectNumberOfTodosPerPage" onChange={() => setTodosPerPage(select.value)} defaultValue={"1"}>
            <option value="1">1 / page</option>
            <option value="10">10 / page</option>
            <option value="25">25 / page</option>
            <option value="50">50 / page</option>
            <option value="100">100 / page</option>
        </select>
    )
}