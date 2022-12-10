import { fetchData } from "./api.js"
const bouton = document.querySelector('button');
const div = document.querySelector('.data-wrapper')
bouton.onclick =async ()=>{
    const post = await fetchData("https://jsonplaceholder.typicode.com/todos");
    console.log(post[3])
    let h3, input,labelId,labelInput,hr; 
   for(let el of post){
    hr = document.createElement('hr')
    h3 = document.createElement('h3');
    labelInput = document.createElement('label');

    input = document.createElement('input');
    input.setAttribute("type","checkbox");
    labelId = document.createElement("label");

    h3.innerText =`${el.title}`;
    labelInput.innerText = "Completed"

    if(el.completed == true){
        input.checked = true;
    }else{
        input.checked = false;
    }
    
    labelId.innerText =`ID: ${el.id}`

    div.append(h3);
    div.append(input);
    div.append(document.createElement("br"))
    div.append(labelId);
    div.append(hr);
    
   }
}



