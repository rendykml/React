export default function TodoList({ text, isCompleted, isDelete=false }) {
    if (isDelete) {
        return null
    }
    
    else {
        return(
        <li>
            {text} {isCompleted ? "✅" : } 
        </li>
        )
    }
}