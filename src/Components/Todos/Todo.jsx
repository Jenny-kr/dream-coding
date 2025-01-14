import { FiTrash2 } from "react-icons/fi";
import styles from './Todo.module.css'

export default function Todo({todo, onDelete, onUpdate}) {
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active'
        onUpdate({...todo, status: status})
    }
    const handleDelete = () => {
        onDelete(todo);
    }
    const { id, text, status } = todo;
    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox} 
                type="checkbox" 
                id={id}
                checked={status === 'completed'}
                onChange={handleChange} />
            <label 
                htmlFor={id}
                className={styles.text}
            >{text}</label>
            <span className={styles.icon}>
                <button 
                    className={styles.button}
                    onClick={handleDelete}><FiTrash2 /></button>
            </span>
        </li>
    )
}