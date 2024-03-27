import './App.css'
import Main from './component/Main'
import Login from './component/Login'
import Signup from './component/Signup'
import{Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Main/>}/>

    </Routes>
    </>
  )
}

export default App
