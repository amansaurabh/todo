// src/components/TaskInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input type="text" className="form-control" value={text} onChange={handleChange} />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </div>
        </form>
    );
};

export default TaskInput;
