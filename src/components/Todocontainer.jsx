import { useState } from "react";
import CreateForm from "./CreateForm";
import CreateTask from "./CreateTask";

function TodoContainer() {
    const [tasks, setTasks] = useState([
        {
            content: "Homework",
            id: Math.random(),
            isCompleted: false,
            isEditing: false,
        },
        {
            content: "Housework",
            id: Math.random(),
            isCompleted: false,
            isEditing: false,
        },
        {
            content: "Gardening",
            id: Math.random(),
            isCompleted: false,
            isEditing: false,
        },
    ]);

    const addTask = (content) => {
        setTasks([...tasks, { content, id: Math.random() }]);
    };

    const deleteTask = (id) => {
        setTasks(
            tasks.filter((task) => {
                return task.id !== id;
            })
        );
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task;
            })
        );
    };

    const toggleisEditing = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, isEditing: !task.isEditing }
                    : task;
            })
        );
    };

    const editTask = (id, newContent) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, content: newContent, isEditing: false }
                    : task;
            })
        );
    };

    return (
        <div className="container">
            <h1>To-do List</h1>
            <CreateForm addTask={addTask} />
            {tasks.map((task) => {
                return (
                    <CreateTask
                        task={task}
                        key={task.id}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        toggleisEditing={toggleisEditing}
                        editTask={editTask}
                    />
                );
            })}
        </div>
    );
}

export default TodoContainer;
