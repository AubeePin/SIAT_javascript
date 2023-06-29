import Item from './Item';

export default function TodoList({todoList}) {
  var list = todoList.map(function(todo, idx) { 
    return <Item key={idx} item={todo}/>
  });
   return (
    <>
      <ul>{list}</ul>
    </>
   ) 
}

  