const mainScene = document.getElementById("mainScene")
const colors = ["darkgreen", "cyan", "gray"]
let genId = 1
let div_count = 0

function setStyle(objId, propertyObject ){
    for (var property in propertyObject){
       objId.style[property] = propertyObject[property];
    }
}

function createObj(objectType, parent, repetitions, properties){
    for(repetitions; repetitions > 0; repetitions--){

        const newObject = document.createElement(objectType)
        if(objectType === "div"){

            let random = Math.round(Math.random()*2)
            setStyle(newObject, {"background":colors[random], "width": "inherit", "height": "30%", "margin-bottom": "1%"})
            newObject.id = genId
            genId++
            parent.appendChild(newObject)
            div_count++

        } else if(objectType === "p"){

            let content = document.createTextNode(prompt("Input content for the new paragraph."))
            newObject.appendChild(content)
            newObject.id = genId
            genId++
            parent.appendChild(newObject)

        } else if(objectType === "button"){

            setStyle(newObject, {"height": "10%","width":"auto"})
            newObject.id = properties
            newObject.value = properties
            newObject.innerHTML = properties
            parent.appendChild(newObject)

        } else if(objectType === "input"){

            setStyle(newObject, {"height": "10%","width":"5%"})
            newObject.id = genId
            newObject.type = properties
            genId++
            parent.appendChild(newObject)

        }  else {

            console.log("Type " + objectType + " is not supported!")

        }
    }
}

createObj("div",mainScene, 5)
createObj("button",document.getElementById("1"), 1, "+")
createObj("button",document.getElementById("1"), 1, "-")
createObj("button",document.getElementById("1"), 1, "*")
createObj("button",document.getElementById("1"), 1, "/")
createObj("input", document.getElementById("1"), 2, "Number")
createObj("p", document.getElementById('1'), 1)