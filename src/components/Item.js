import "./Item.css";
import { BsTrash} from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
export default function Item(props) {

    const { data, deleteTask, editTask } = props
    return (
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="btn-container">
                <BsTrash onClick={() => deleteTask(data.id)} className="btn-delete" />
                <BiEdit onClick={() => editTask(data.id)} className="btn-change" />

            </div>
        </div>
    )
}