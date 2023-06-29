export default function TodoList({todoList}) {
  return  (
    <>
      <ul>
        {todoList.map(function(todo, i){
          return(
            <li key={i}>
              <input type="checkbox"/>
              {todo.title}
            </li>
          )
        })}
      </ul>
    </>
  )
};