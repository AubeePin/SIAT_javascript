/* import TodoListItem from './TodoListItem'; */

export default function TodoList({todoList,deleteOn}) {

  return (
    <>
    <ul>
      {
      todoList.map((todo,i)=>{ /*  ->todo 는 매개변수임 */
        return(<li key={i}>
          <input type="checkbox"/>
          {todo.title}
          <button onClick={() =>{
            deleteOn(todo.seq);
          }}>X</button>
        </li>);
      })}
    </ul>
    </>
  )
};


  
