
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../actions/types';

// Define initial state with tasks retrieved from local storage or an empty array
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Task reducer function
const taskReducer = (state = initialState, action) => {
    let updatedTasks; // Variable to hold updated tasks array
    switch (action.type) {
        // Case for adding a new task
        case ADD_TASK:
            // Create a new task object with unique ID, task text, and completion status
            updatedTasks = [...state.tasks, { id: Date.now(), text: action.payload.text, completed: false }];
            // Update tasks in local storage
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            // Return updated state with new tasks array
            return { ...state, tasks: updatedTasks };

        // Case for deleting a task
        case DELETE_TASK:
            // Filter out the task with the specified ID
            updatedTasks = state.tasks.filter((task) => task.id !== action.payload.id);
            // Update tasks in local storage
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            // Return updated state with filtered tasks array
            return { ...state, tasks: updatedTasks };

        // Case for toggling the completion status of a task
        case TOGGLE_TASK:
            // Map through tasks and toggle completion status of the task with the specified ID
            updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            // Update tasks in local storage
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            // Return updated state with modified tasks array
            return { ...state, tasks: updatedTasks };

        // Default case returns the current state
        default:
            return state;
    }
};


export default taskReducer;
