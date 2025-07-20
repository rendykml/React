export default function TodoList({ text, isCompleted, isDelete=false }) {
    if (isDelete) {
        return null
    }
    
    else {
        return(
        <li>
            {isCompleted ? <del>{text}</del> : text }
        </li>
        )
    }
}