import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function CreateTask({
    task,
    deleteTask,
    toggleComplete,
    toggleisEditing,
    editTask,
}) {
    return task.isEditing ? (
        <EditForm task={task} editTask={editTask} />
    ) : (
        <div className={`task ${task.isCompleted ? "completed" : ""}`}>
            <p
                onClick={() => {
                    toggleComplete(task.id);
                }}>
                {task.content}
            </p>
            <div>
                <MdEdit
                    className="edit-icon"
                    onClick={() => {
                        toggleisEditing(task.id);
                    }}
                />
                <MdDelete
                    onClick={() => {
                        deleteTask(task.id);
                    }}
                    className="delete-icon"
                />
            </div>
        </div>
    );
}

export default CreateTask;
