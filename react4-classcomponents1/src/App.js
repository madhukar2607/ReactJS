import{Component} from 'react';
import ThirdComponent from './ThirdComponent';

class App extends Component{
render (){

  return(
<div class="App">
  <h1>WelCome to class componenet</h1>
  <FirstComponent></FirstComponent>
  <SecondComponent></SecondComponent>
  <ThirdComponent></ThirdComponent>

</div>

    
  );
}

}
class FirstComponent extends Component{
render(){
return(

  <div>
    <h2>Welcome to FirstComponent</h2>
  </div>
  );
}



}
class SecondComponent extends Component{
  render(){
  return(
  
    <div>
      <h2>Welcome to SecondComponent</h2>
    </div>
    );
  }
  
  
  
  }

export default App;
