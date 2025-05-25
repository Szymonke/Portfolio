import { useState } from "react";

const ItemList = () => {
    const [items, setItems] = useState<string[]>([])

    const addItem = () => {
        const inputElement = document.querySelector<HTMLInputElement>(".newItemContent");
        const inputValue = inputElement ? inputElement.value : "";
        if(inputValue) {
            setItems([...items, inputValue])
        }else{
            console.log("Empty!")
        }
        }
    return (
        <div className="itemList">
            <input type="text" placeholder="What's the task for today?" className="newItemContent"></input>
            <div className="addButton" onClick={addItem}>Add item</div>
            <ul className="list">          
                {items.map(item => (
                    <>
                        <li>
                            <div className="doneButton">Done</div>
                            <p className="item">{item}</p>
                            <div className="deleteButton">Delete</div>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;