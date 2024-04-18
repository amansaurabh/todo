// Import action types
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './types';

// Action creator function to add a new task
export const addTask = (text) => ({
    type: ADD_TASK,          // Action type to add a task
    payload: { text },       // Payload containing the task text
});

// Action creator function to delete a task
export const deleteTask = (id) => ({
    type: DELETE_TASK,       // Action type to delete a task
    payload: { id },         // Payload containing the task ID
});

// Action creator function to toggle the completion state of a task
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,       // Action type to toggle task completion
    payload: { id },         // Payload containing the task ID
});
