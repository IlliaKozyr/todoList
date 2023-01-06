import "./style.css"

export const NumberOfTodosPerPage = ({setTodosPerPage}) => {

    const select = document.getElementById("selectNumberOfTodosPerPage");

    return(
        <select id="selectNumberOfTodosPerPage" onChange={({ target: {} }) => setTodosPerPage(select.value)} defaultValue={"10"}>
            <option value="1">1 / page</option>
            <option value="2">2 / page</option>
            <option value="3">3 / page</option>
            <option value="4">4 / page</option>
            <option value="5">5 / page</option>
            <option value="6">6 / page</option>
            <option value="7">7 / page</option>
            <option value="8">8 / page</option>
            <option value="9">9 / page</option>
            <option value="10">10 / page</option>
        </select>
    )
}