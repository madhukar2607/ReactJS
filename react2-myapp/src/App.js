import logo from './logo.svg';
import './App.css';

function App() {
  const fristname="Madhukar";
  const lastname="Reddy";
  const job="Full stack Developer"


  return (
    <div className="App">
      <h1>Welcome to ReactJs</h1>
      <h3>Fullname: {fristname}</h3>
      <h3>Lastname: {lastname}</h3>
      <h3>Job Role: {job}</h3>
    </div>
  );
}

export default App;
