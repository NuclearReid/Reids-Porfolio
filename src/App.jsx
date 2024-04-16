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
      <main className="pt-5">
        <Outlet />
      </main>
    <Waves />
    </>
  )
}

export default App
