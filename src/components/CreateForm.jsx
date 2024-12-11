import { useState } from "react";

function CreateForm({ addTask }) {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    };

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="input task"
                value={task}
                onChange={(e) => {
                    setTask(e.target.value);
                }}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default CreateForm;
