import { useState, type Key } from "react";

const ItemList = () => {
    const [items, setItems] = useState<{id: Key, info: string, theme: string, status: boolean}[]>([])
    const [newItem, setNewItem] = useState<string>()
    const [listTheme, setListTheme] = useState<string>("emptyList")

    const getNewItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;
        if(targetValue) {
            setNewItem(targetValue)
        }else{
            console.log("Empty!")
        }
    }

    const addItem = () => {
        if(newItem) {
            setItems([...items, {
                "id": items.length,
                "info": newItem,
                "theme": "incomplete",
                "status": false
            }])
            if(items){setListTheme("list")}
        }else{
            console.log("Empty!")
        }
    }
    
    const markAsDone = (id: Key) => {
        items.filter((item) => {
            if(item.id == id && item.theme == "incomplete"){
                const index = items.indexOf(item)
                items[index].theme = "complete"
                items[index].status = true
            } else if(item.id == id && item.theme == "complete"){
                const index = items.indexOf(item)
                items[index].theme = "incomplete"
                items[index].status = false
            }
        })
        setItems([...items])
    }

    const deleteItem = (id: Key) => {
        items.filter((item) => {
            if(item.id == id){
                const index = items.indexOf(item)
                items.splice(index, 1)
            }
        })
        setItems([...items])
        if(!(items.length>0)){
            setListTheme("emptyList")
        }
    }

    return (
        <div className="itemList">
            <input type="text" placeholder="What's the task for today?" className="newItemContent" onChange={getNewItem}></input>
            <div className="addButton" onClick={addItem}>Add item</div>
            <ul className={listTheme}>          
                {items.map(item => (
                    <li className="item" key={item.id} data-key={item.id}>
                        <p className={item.theme} onClick={() => {
                            markAsDone(item.id)
                        }}>{item.info}</p>
                        <img src="src\assets\images\recycle-bin.png"className="deleteButton" onClick={() => {
                            deleteItem(item.id)
                        }}></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;