import React from "react"
import Store from "./Store"

function StoreList({storeListData}) {

    const storeStores = storeListData.map((store) => {

        return <Store key={store.id} store={store}/>
        
    })

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeStores}
            </tbody>
        
        </table>
    );
}

export default StoreList;