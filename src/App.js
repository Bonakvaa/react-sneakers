import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear ">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex mb-40 justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="cards d-flex">
          <Card />  
          <Card />      
          <Card />
          <Card />
        </div>

      </div>
    </div>
  );
}

export default App;
