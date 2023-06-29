import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    {seq:1, title:'아이고',done:false},
    {seq:2, title:'하...',done:false},
    {seq:3, title:'몰랑..',done:true}
  ]);

  const [cnt, setCnt] = useState(4);

  function appendFn(text) {
    console.log("appendFn호출", text);
    var item = {seq:cnt, title:text ,done:false}
    setCnt(cnt+1);
    var newList = [...todoList, item];
    setTodoList(newList);
  };

  return (
    <>
    <h1>하....하하하하^^</h1>
    <hr />
    <Input appendFn={appendFn} />
    <hr />
    <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
