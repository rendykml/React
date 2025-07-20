export default function TodoList({ text, isCompleted, isDelete=false }) {
    if (isDelete) {
        return null
    }
    
    else if (isCompleted){
        return(
        <li>
            <del>{text}</del>
        </li>
        )
    }else {
        return <li>{text}</li>
    }
}