import axios from 'axios'
import AppRouter from './routes'


axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.post['Accept'] = 'application/json' 
axios.defaults.headers.post['Content-type'] ='application/json'
axios.defaults.withCredentials = true


function App() {
  return (
    <div>
      <AppRouter />
     
    </div>
  )
}

export default App
