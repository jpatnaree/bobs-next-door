import React from "react"

function NewStoreForm({addStore, handleInput}) {

    return(
        <form onSubmit={addStore}>
            <input onChange={handleInput} type="text" id="name" placeholder="Store Name"/>
            <input onChange={handleInput}type="text" id="image" placeholder="Image URL" />
            <input onChange={handleInput}type="number" id="season" placeholder="Season" step="1"/>
            <input onChange={handleInput}type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;