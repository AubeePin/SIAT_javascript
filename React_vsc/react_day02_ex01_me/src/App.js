import {useState} from 'react'; /* 이건 상위컴포넌트가 하위컴포넌트 소환안해도 자동불러오기? */
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const list = [ /* 상수에 리스트고 이건 고정된거임. */
    {seq:1, title: '빨리자기', done:false },
    {seq:2, title: '밥잘먹기', done:false },
    {seq:3, title: '운동하기', done:false }
  ];

  const[todoList, setTodoList] = useState(list); /* 묶음상품..? */
  /* 글 나눔칸 */

  return (
    <>
      <h1>건강관리 방법</h1>
      <hr/>
      <Input/>{/* 인풋으로 빠져나감.동시에 위에 임포트해서 연결. */}
      <hr/>
      <TodoList todoList={todoList}/>
    </>
  );
}

export default App;