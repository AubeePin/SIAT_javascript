import Hello from './Hello';
import MyTbl from '../MyTbl';

const todoList = [
  {seq:1, name:'스프링부트 공부', done: false},
  {seq:2, name:'친구 만나기', done:false},
  {seq:3, name:'테니스치기', done:false},

];

function App_test() {
  return (
    <>
      
      <Hello />
      <hr/>
      <MyTbl myArray={myArray} data1="aaa" data2="bbb" />
    </>
  );
}

export default App;