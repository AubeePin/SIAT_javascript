import React, { useCallback, useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {seq: 1, title:'배고프다.', done:false},
    {seq: 2, title:'자고싶다.', done:false},
    {seq: 3, title:'빨리끝내야하는데...', done:false}
  ]);

  const [cnt, setCnt] = useState(4);

  function appendFn(text) {
   console.log("appendFn호출", text);  
    var item ={seq: cnt, title:text, done:false}
    setCnt(cnt+1);
    var newList = [...todoList, item];
    setTodoList(newList);
  };
  
  const deleteOn = useCallback(
    (seq) => {
      setTodoList(todoList.filter(todo => todo.seq !== seq));
    },
    [todoList]
    );

  return (
   <>
   <h1>완료표시 나오게 하자.</h1>
   <hr />
   <Input appendFn={appendFn}/>
   <hr />
   <TodoList todoList={todoList} deleteOn={deleteOn} />
   </>
  );
}

export default App;
