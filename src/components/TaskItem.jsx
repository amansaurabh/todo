import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    // Function to handle task deletion
    const handleDelete = () => {
        dispatch(deleteTask(task.id)); // Dispatch deleteTask action with task ID
    };

    // Function to handle task completion toggle
    const handleToggle = () => {
        dispatch(toggleTask(task.id)); // Dispatch toggleTask action with task ID
    };

    return (
        <div className="task-item">
            {/* Task item representation */}
            <li className={`list-group-item d-flex justify-content-between align-items-center rounded ${task.completed ? 'bg-success' : ''}`}>
                <div className="task-content">
                    {/* Task checkbox */}
                    <div className="task-checkbox">
                        <input type="checkbox" checked={task.completed} onChange={handleToggle} id={`task-${task.id}`} />
                        <label htmlFor={`task-${task.id}`} className="checkbox-label" />
                    </div>
                    {/* Task text */}
                    <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                        {task.text}
                    </span>
                </div>
                {/* Task actions */}
                <div className="task-actions">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </li>
        </div>
    );
};

export default TaskItem;
