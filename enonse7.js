const input = document.createElement("input");
document.querySelector("body").append(input);


const digits = '0123456789';

input.addEventListener('keydown', function(event){
    let value = event.target.value;
    let charCode = event.code;
    console.log(charCode);
        console.log(value);
    if(charCode != 'Backspace'){

          if(value.length >= 8 || !digits.includes(charCode.slice(-1))){
              event.preventDefault()
          }
    }

});