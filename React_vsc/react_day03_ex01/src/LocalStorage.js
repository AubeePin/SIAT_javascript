function LocalStorageTest() {
  //localStorage.setItem("lastname", "Smith");
  var lastname = localStorage.getItem("lastname");
  console.log(lastname);
  return (
    <>
      <div>(c) Comstudy schools. since 2006.</div>
    </>
  );
}

export default LocalStorageTest;