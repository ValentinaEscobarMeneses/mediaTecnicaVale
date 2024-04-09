import { pinturas } from "./data/data.js";

console.log (pinturas)

const items = document.getElementById('item');
const templateCard = document.getElementById ('template-card').content;
const fragment = document.createDocumentFragment ();

const LoadData = (pinturas) =>{
    pinturas.forEach(data => {
        const {id,name,image} = data
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute ('src',image)
        const clone = templateCard.cloneNode (true)
        fragment.appendChild (clone)
    });
    
    items.appendChild (fragment)
}

document.addEventListener ('DOMContentLoaded', ()=>{
    LoadData(pinturas)
})