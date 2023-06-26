function TodoList({todoList}) {
  var list = todoList.map((itme), i) => {
    return <li key={i}><input type="checkbox" />{item.seq} : {item.work} ({item.done? 'O':'X'})
  });
  
  const list = todoList.map(function(item) {
  
  return (
    <>
      <tr>
        <td>{item.seq}</td>
        <td>{item.work}</td>
        <td>{item.done}</td>
      </tr>
    </>
  );
  });

  return (
    <>
    <h1>리스트</h1>
    <table border="3">{list}</table>
    </> 
  );
};

export default TodoList;