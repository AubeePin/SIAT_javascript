import Hello from './Hello';
import TodoList from './TodoList';

const todoList = [
  {seq:1, work:'스프링부트 공부', done:false},
  {seq:2, work:'친구 만나기', done:false},
  {seq:3, work:'탁구치기', done:false},
  {seq:4, work:'리액트 복습', done:false},
  {seq:5, work:'게시판 만들기', done:false}
];

function App() {
  return (
    <>
      <Hello />
      <hr/>
     <TodoList todoList={todoList} />
    </>
  );
}

export default App;