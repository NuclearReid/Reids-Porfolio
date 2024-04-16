import { Outlet } from 'react-router-dom';

import Nav from './components/NavTabs';
import Waves from './components/Waves';
// import ReidBack from './components/ReidBack';
import './App.css'

//these imports are for spring //////
// import { useSpring, a } from '@react-spring/web'
// import useMeasure from 'react-use-measure'
// // import { Container, Title, Frame, Content, toggle } from './styles'
// import * as Icons from './components/icons'
/////////////////////////

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
