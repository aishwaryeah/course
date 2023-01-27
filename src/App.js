import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Messege';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind'
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
      <Form />
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message />
      <Greet name="Pam" lastName="Beesly">
        <p>This is a child prop</p></Greet>
      <Greet name="Jim" lastName="Halpert"><button>Action</button></Greet>
      <Greet name="Dwight" lastName="Schrute"/>
      <Welcome name="Pam" lastName="Beesly"><p>asdf</p></Welcome>
      <Welcome name="Jim" lastName="Halpert"/>
      <Welcome name="Dwight" lastName="Schrute"/> */}
    </div>
  );
}

export default App;
