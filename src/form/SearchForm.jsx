export default function searchForm(){
    return (
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert("Search button clicked!");
            }}> Search </button>
        </form>
    )
}