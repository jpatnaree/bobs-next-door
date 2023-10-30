import React, {useState} from "react"

function NewStoreForm({storeListData, setStoreListData}) {

    const [newStore, setNewStore] = useState({
        // name: "",
        // image: "",
        // season: "",
        // episode: ""
    })

    function handleInputChange(e) {
        console.log(e.target.id)
        console.log(e.target.value)
        const {id, value} = e.target
        setNewStore({
            ...newStore,
            [id]: value

        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:8085/stores`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newStore)
        })
        .then(response => {
            if(response.ok) {
               return response.json()
            }
        }).then(newAdded => {
           return setStoreListData([...storeListData, newAdded])
    })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} type="text" id="name" placeholder="Store Name"/>
            <input onChange={handleInputChange} type="text" id="image" placeholder="Image URL" />
            <input onChange={handleInputChange} type="number" id="season" placeholder="Season" step="1"/>
            <input onChange={handleInputChange} type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;