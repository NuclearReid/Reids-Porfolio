import { Outlet } from 'react-router-dom';

import Nav from './components/NavTabs';
import Waves from './components/Waves';
// import ReidBack from './components/ReidBack';
import './App.css'



function App() {

  return (
    <>
    {/* <ReidBack /> */}
    <Nav />
      <main className="pt-5 pb-5">
        <Outlet />
      </main>
      <footer className='pt-5'>
         <Waves/>
      </footer>
    
    </>
  )
}

export default App
