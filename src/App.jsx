import TaskInput from './components/TaskInput.jsx'; // Import TaskInput component
import TaskList from './components/TaskList.jsx'; // Import TaskList component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS

const App = () => {
  return (
    <div className="container">
      {/* Application header */}
      <h1 className="mt-5 mb-4">Todo App</h1>
      {/* TaskInput component for adding tasks */}
      <TaskInput className="task-input" />
      {/* TaskList component for displaying tasks */}
      <TaskList />
    </div>
  );
};

export default App;
