import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players';
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async() =>{
  const res = await fetch("/data.json");
  return res.json();
}



function App() {

  const [coin, setCoin] = useState(5000000);
  
const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Players coming........</p>}>
        <Players playerPromise = {playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>


      <ToastContainer />
    </>
  )
}

export default App
