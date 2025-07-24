export default function ToolBar({onClick}){
    return (
        <div>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}