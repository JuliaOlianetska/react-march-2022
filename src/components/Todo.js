export default function Todo ({todo}) {

    return (
      <div>
          {todo.id} - {todo.title} - {todo.completed}
      </div>
    );
}