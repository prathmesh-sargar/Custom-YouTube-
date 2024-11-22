import Homepage from "./components/Homepage"
import { BrowserRouter as  Router , Route , Routes} from 'react-router-dom'
import Watch from "./components/Watch"

function App() {
  return (
    <>
  <Router>
   <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/watch" element={<Watch/>} /> 
   </Routes>
  </Router>  
    </>
  )
}

export default App
