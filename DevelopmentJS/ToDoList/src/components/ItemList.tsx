
const addItem = () => {
    const inputValue = document.querySelector(".newItemContent").value
    const listElement = document.querySelector(".list")
    const newItem = document.createElement("li")

    newItem.innerHTML = inputValue
    listElement?.appendChild(newItem)
}

const ItemList = () => {
    return (
        <div className="itemList">
            <input type="text" placeholder="What's the task for today?" className="newItemContent"></input>
            <div className="addButton" onClick={addItem}>Add item</div>
            <ul className="list">
            </ul>
        </div>
    )
}

export default ItemList;