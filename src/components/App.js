import '../stylesheets/App.css';
import ReducerHook from './ReducerHook';
import RefHook from './RefHook';

function App() {
  return (
    <div className="Wrapper">
      <p>Home</p>
      {/* <ReducerHook/> */}
      <RefHook/>
    </div>
  );
}

export default App;
