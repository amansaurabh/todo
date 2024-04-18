import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem.jsx';

const TaskList = () => {
    // Get tasks from Redux store state
    const tasks = useSelector((state) => state.tasks);

    return (
        // Render task list as an unordered list
        <ul className="list-group list-group-flush">
            {/* Map through tasks and render TaskItem component for each task */}
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
