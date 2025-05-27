import { useState, type Key } from "react";

const ItemList = () => {
    const [items, setItems] = useState<{id: Key, info: string}[]>([])

    const addItem = () => {
        const inputElement = document.querySelector<HTMLInputElement>(".newItemContent");
        const inputValue = inputElement ? inputElement.value : "";
        if(inputValue) {
            const newItem = {
                "id": items.length,
                "info": inputValue
            }
            setItems([...items, newItem])
        }else{
            console.log("Empty!")
        }
    }
    
    const deleteItem = () => {
        console.log("Deleted!")
    }
    return (
        <div className="itemList">
            <input type="text" placeholder="What's the task for today?" className="newItemContent"></input>
            <div className="addButton" onClick={addItem}>Add item</div>
            <ul className="list">          
                {items.map(item => (
                    <li className="item" key={item.id}>
                          <p className="itemContent">{item.info}</p>
                         <div className="deleteButton" onClick={deleteItem}>Done</div>
                     </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;