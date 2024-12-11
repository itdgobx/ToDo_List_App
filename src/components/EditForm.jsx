import { useState } from "react";

function EditForm({ task, editTask }) {
    const [taskContent, setTaskContent] = useState("task.content");
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(task.id, taskContent);
    };

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="input task"
                value={taskContent}
                onChange={(e) => {
                    setTaskContent(e.target.value);
                }}
            />
            <button type="submit">Finish</button>
        </form>
    );
}

export default EditForm;
