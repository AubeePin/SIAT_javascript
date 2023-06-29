import { useEffect, useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';



function App() {
  const [todoList, setTodoList] = useState([
    {seq:1, title:'리액트 주말 스터디 하기', done: false},
    {seq:2, title:'자바 복습하기', done: false},
    {seq:3, title:'Servlet/JSP 공부', done: true},
    {seq:4, title:'자바스크립트 복습하기', done: false},
    {seq:5, title:'파이널 프로젝트 구상', done: true}
  ]);
  const [seqCnt, setSeqCnt] = useState(6);

  useEffect(function(){
    const localStorageData = localStorage.getItem('todoListData');
    if(localStorageData) {
      // localStorage.getItem의 결과는 문자열이다.
      // JOSN.parse를 이용해 객체로 만든다.
      let localStorageObj = JSON.parse(localStorageData);
      setTodoList(localStorageObj.todoList);
      setSeqCnt(localStorageObj.seqCnt);
    }
  }, []);

  // localStorage에 저장 하는 기능.
  function saveLocalStorage(newList, newCnt) {
    if(newList) {
      let localStorageObj = {seqCnt:newCnt, todoList:newList}
      localStorage.setItem("todoListData", JSON.stringify(localStorageObj));
    }
  }

  function appendItem(title) {
    // todoList를 복제해서 수정하고 다시 setTodoList 한다.
    var item = {
      seq: seqCnt,
      title: title,
      done: false
    };
    var newList = [...todoList, item];
    setTodoList(newList);
    var newCnt = seqCnt+1
    setSeqCnt(newCnt);
    // localStorage에 저장하는 메서드 호출
    saveLocalStorage(newList, newCnt);
  }

  function updateItem(newItem) {
    var newList = [...todoList];
    var idx = newList.findIndex(function(item) {
      return item.seq === newItem.seq;
    });
    if(idx >= 0) {
      // mode가 1면 done 변경, mode가 2이면 title 변경
      // newLlist[idx].done = !newLlist[idx].done;
      newList[idx] = newItem;
    }
    setTodoList(newList);
    // localStorage에 저장하는 메서드 호출
    saveLocalStorage(newList, seqCnt);
  }

  function deleteItem(seq) {
    console.log("deleteItem: " + seq);
    //var newList = todoList.filter(function(item) {
    //  return item.seq !== seq;
    //});
    var newList = [...todoList];
    var idx = newList.findIndex(function(item) {
      return item.seq == seq;
    });
    if(idx >= 0) {
      newList.splice(idx, 1);
    }
    setTodoList(newList);
    saveLocalStorage(newList, seqCnt);
  }

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <Input appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} deleteItem={deleteItem} updateItem={updateItem} />
    </>
  );
}

export default App;
