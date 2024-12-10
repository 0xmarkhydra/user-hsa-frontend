import React, { useState } from 'react';
import useTask from "@/components/Task/useTask";
import blogService from "@/services/block.service";

function TaskView(props) {
    const { todos, addTodo, removeTodo, toggleTodo } = useTask();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        addTodo({
            id: Date.now(),
            text: newTodo,
            completed: false,
        });
        setNewTodo('');
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task"
                />
                <button
                    onClick={handleAddTodo}
                    className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                        <span
                            className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
                        >
                            {todo.text}
                        </span>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => toggleTodo(todo.id)}
                                className={`p-1 rounded-lg ${todo.completed ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'} hover:bg-opacity-75`}
                            >
                                {todo.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskView;
