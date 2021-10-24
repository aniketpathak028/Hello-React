import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EvenBind from './components/EvenBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.modules.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      <Form />
      
      
      
      
      
      
      {/* <h1 className='error'>Error</h1>
      <h1 className= {`${styles.success}`} >Success</h1>   NOT WORKING!! :( */} 
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EvenBind /> */}
      {/* <Greet name="Bruce" hero="Superman"> <p>This is props children</p> </Greet>
      <Greet name="Clark" hero="Batman"> <button>Action</button> </Greet> */}
      {/* <Greet name="Diana" hero="Wonder Woman"> </Greet> */}
      {/* <Hello><p>Class component prop</p></Hello> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <NameList /> */}
    </div>
  );
}

export default App;
