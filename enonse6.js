const countryArray = ["Haiti", "France", "United States", "Belgium", "Canada", 
                      "Jamaica", "Mexico", "Brazil", "Nigeria"];

let res = countryArray.map((el)=>{
    return   `<ul>
                <li><input type="checkbox" name="country" value="${el}" />${el}</li>
              </ul>`
})

const div = document.createElement("div");
const br = document.createElement("br");
document.querySelector("body").append(div);
document.querySelector("body").append(br);


for(el of res){
    div.innerHTML += el   
}
const bouton = document.createElement('button');

bouton.innerText = "Recuperer";
div.append(bouton)

const divChecked = document.createElement("div");
document.querySelector("body").append(divChecked);

bouton.onclick =(event)=>{
    const check =[]
    const country = document.querySelectorAll("input[name = country]");

    for (i=0; i<country.length; i++){
        if(country[i].checked){
            check.push(country[i].value)
        }
    }

    if (check.length > 0){
        divChecked.innerText = `Checked country : ${check.join(",")}.`;
    }
    if(check.length <=0)
    {
        divChecked.innerText = `Checked country : None.`;
    }
}