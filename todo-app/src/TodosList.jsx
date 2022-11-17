const TodosList = ({ todos, handleClickDelete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={() => handleClickDelete(todo.id)}>
                        delete todo
                    </button>
                </div>
            ))}
        </div>
    );
};
export default TodosList;
