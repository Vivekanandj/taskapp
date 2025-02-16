/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "general",
        tags: [],
        startDate: "",
        endDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Submitted:", taskData);

        if (!taskData.task.trim()) {
            alert("Task name cannot be empty!");
            return;
        }

        setTasks((prev) => [...prev, taskData]);

        // Reset form
        setTaskData({
            task: "",
            status: "general",
            tags: [],
            startDate: "",
            endDate: "",
        });
    };

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    className="task_input"
                    placeholder="Enter your task"
                    onChange={handleChange}
                />

                <div className="task_form_bottom_line">
                    <div>
                        <Tag
                            label="Start Date:"
                            value={taskData.startDate}
                            onChange={(e) =>
                                setTaskData((prev) => ({ ...prev, startDate: e.target.value }))
                            }
                        />
                        <Tag
                            label="End Date:"
                            value={taskData.endDate}
                            onChange={(e) =>
                                setTaskData((prev) => ({ ...prev, endDate: e.target.value }))
                            }
                        />
                    </div>

                    <div>
                        <select
                            name="status"
                            value={taskData.status}
                            className="task_status"
                            onChange={handleChange}
                        >
                            <option value="general">Details</option>
                            <option value="backlog">Backlog</option>
                            <option value="progress">In Progress</option>
                            <option value="paused">Paused</option>
                            <option value="done">Done</option>
                        </select>

                        <button type="submit" className="task_submit">
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>
        </header>
    );
};

export default TaskForm;