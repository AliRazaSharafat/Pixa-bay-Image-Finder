import NavBar from './component/navbar/navbar';
import Search from './component/search/search';
import './App.css';
function App() {
  return (
    <div>
      < NavBar />
      <Search />
      <span>Deployed on surge and removed workflow_dispatch</span>
    </div>
  )
}

export default App;
