export default function Item ({item}) {
  return (
    <>
     <li>
        <input type="checkbox"/>
        {item.title}
        <button>삭제</button>
      </li>
    </>
  )
}