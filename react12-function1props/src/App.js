import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  const personCardsArr=[
    {
     firstName: "Ramesh",
     lastName: "K",
     age: 40,
     job: "Technical"
 
    },
    {
     firstName: "Ravi",
     lastName: "K",
     age: 38,
     job: "Technical"
    },
    {
     firstName: "Raju",
     lastName: "N",
     age: 33,
     job: "Technical"
 
    }
 
   ];


 const personCards = personCardsArr.map((item,pos) => {
    return(
      <PersonCard key={pos}/>
    )
 })

  return (
    <div className="App">
      {personCards}
     
    </div>
  );
}

export default App;
