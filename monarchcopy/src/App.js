
import './App.css';
import {Header, Footer} from './component/index'
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
