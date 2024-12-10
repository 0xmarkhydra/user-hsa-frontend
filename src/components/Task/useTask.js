import { useState } from 'react';
import blogService from "@/services/block.service";

const useTask = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    React.useEffect(() => {
        blogService.getListBlogs().then((res) => {
            console.log('getListBlogs', res);
        });
    }, []);

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    };
};

export default useTask;
