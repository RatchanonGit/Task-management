import "./Addform.css";

export default function Addform(props) {
    const { title, setTitle, saveTask, editId } = props
    return (
        <div>
            <h2>Form task management</h2>
            <form onSubmit={saveTask}>
                <div className="form-control">
                    <input type="text" className="text-input" value={title}
                        onChange={(e) => setTitle(e.target.value)}></input>
                    <button className="submit-btn">
                        {editId ? "update" : "add"}
                    </button>
                </div>
            </form>      
        </div>
       
    )
}