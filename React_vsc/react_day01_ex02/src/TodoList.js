function TodoList({todoList}) {
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