/* eslint-disable react/prop-types */
import "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ task, startDate, endDate }) => {
    return (
        <article className="task_card">
            <p className="task_text">{task}</p>
            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    <Tag tagName={`Start Date: ${startDate}`} />
                    <Tag tagName={`End Date: ${endDate}`} />
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} className="delete_icon" alt="delete" />
                </div>
            </div>
        </article>
    );
};

export default TaskCard;