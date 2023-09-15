import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    firstName : "Ramesh",
    lastName : "K",
    age: 30,
    job : "Technical"

  }
  const styles = {
    margin: '28px',
    padding: '28px',
    boxSizing: 'border-box',
    borderRadius: '16px',
    boxShadow: '0 8px 20px #ccc'
  }
  return (
    <div className="App">
      <div style={styles}>
      <h2>Employee Information :</h2>
      <h3>FullName : { person.firstName} {person.lastName}</h3>
      <h3>Age : {person.age}</h3>
      <h3>Job : {person.job}</h3>
    </div>  
    </div>
  );
}

export default App;
