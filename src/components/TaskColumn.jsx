/* eslint-disable react/prop-types */
import 'react'
import "./TaskColumn.css";
import TaskCard from './TaskCard';

const TaskColumn = ({title, icon}) => {
    return (
        <div>
            <section className="task_column">
                <h2 className='task_column_heading'>
                    <img className='task_column_icon' src={icon} alt="Icon" />
                    {title}
                </h2>

                <TaskCard />
            </section>
        </div>
    );
};


export default TaskColumn;
