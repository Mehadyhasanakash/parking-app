import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // gretting the vaule the local Storage
const getDataFrom = () =>{
  const data = localStorage.getItem('datas')
  if(data) {
    return JSON.parse(data);
  }
  else{
    return []
  }
}

  // main array filed
  const [datas, setDatas] = useState(getDataFrom());


  // input filed state
  const [car, setCar] = useState("");
  const [diver, setDiver] = useState("");
  const [Checkin, setCheckin] = useState("");
  const [ChecOut, setCheckOut] = useState("");

  
  const handelAddItem = (e) =>{
    e.preventDefault();
    // crating on oject
    let  data ={
      car,
      diver,
      Checkin,
      ChecOut

    }
    setDatas([...datas, data]);
    setCar('');
    setDiver('');
    setCheckin('');
    setCheckOut('');
 
  }

  // saving data to localStorage
useEffect(() =>{
  localStorage.setItem('datas', JSON.stringify(datas));

}, [datas])









 
  return (
    <div className='main-div'>
      <div className="center-div">

        <h1>TodoList</h1>

       <form  onSubmit={handelAddItem}>
       <input type="text"  placeholder='Car No.' onChange={(e) => setCar(e.target.value)} value={car} required />
        <input type="text"  placeholder='Diver Name'  onChange={(e) => setDiver(e.target.value)} value={diver} required/>
        <input type="text"  placeholder=' Checkin Time ' onChange={(e) => setCheckin(e.target.value)} value={Checkin} required />
        <input type="text"  placeholder='  Checkout Time ' onChange={(e) => setCheckOut(e.target.value)} value={ChecOut} required />
        <button type="submit"> + </button>
       </form>

        <div className='list-item'>
      {datas.length < 1 &&  <div>NO data </div> }
        </div>

      </div>

     
      
    </div>
  );
}

export default App;
