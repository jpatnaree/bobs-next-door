import '../App.css';
import Search from './Search'
import NewStoreForm from './NewStoreForm';
import StoreList from './StoreList';
import { useEffect, useState } from 'react';

function App() {

    const [stores, setStores] = useState([])
    const [formData, setFormData] = useState({})
    const [searchText, setSearchText] = useState('')
    // console.log(formData)
    
    useEffect(() => {
        fetch('http://localhost:8085/stores')
        .then( resp=> resp.json())
        .then(storesData => {
            setStores(storesData)
        })
    }, [])

    function addStore (e) {
        e.preventDefault()
        setStores([...stores, formData])
        fetch('http://localhost:8085/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(newStore => {
            setStores([...stores, newStore])
        })
        
    }

    function handleInput(e) {
        if(e.target.id === 'season' || e.target.id === 'episode') {
            setFormData({...formData, [e.target.id]: Number(e.target.value)})
        } else {
       setFormData({...formData, [e.target.id]: e.target.value})
        }
    }

    // console.log(searchText)

    function handleSearch(e) {
        setSearchText(e.target.value)
    }

    const filterStore = stores.filter(store => {
        if (searchText === "") {
            return true;
        }
        return store.name.toUpperCase().includes(searchText.toUpperCase())
    })

    // console.log(filterStore)

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="Bob the Burger" />
      <h1>Neighbor Stores</h1>
      <Search handleSearch={handleSearch} />
      <NewStoreForm addStore={addStore} handleInput={handleInput} />
      <StoreList stores={filterStore} />
    </div>
  );
}

export default App;