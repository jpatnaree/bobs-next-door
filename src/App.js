import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [storeListData, setStoreListData] = useState([])
  
  const [searchBar, setSearchBar] = useState('')

  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(response => response.json())
    .then(storeData => {
      setStoreListData(storeData)
    })
  }, [])

  const searchFilter = storeListData.filter(store => {
    if (searchBar === "") {
      return true
    }
    else{
      return store.name.toUpperCase().inclde(searchBar.toLowerCase())
    }
  })

  function handleSearch(e) {
    setSearchBar(searchBar)
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="bob" />
      <h1>Neighbor Stores</h1>
      <Search setSearchBar={setSearchBar} handleSearch={handleSearch} />
      <NewStoreForm storeListData={storeListData} setStoreListData={setStoreListData}/>
      <StoreList storeListData={storeListData}/>
    </div>
  );
}

export default App;
