import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  return (
    <>
      <Navbar title="Aditya" />
      <div className="container" mx-3></div>
      <TextForm/>
    </>
  );
}

export default App;