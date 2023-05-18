
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      String= "";
      input.value = string;
      string = string.substring(innerHTML = string);
    }
    else if(e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length -1);
    // alert("mohon maaf tombol DEL tidak berfungsi karena dalam masa pengembangan")
    }
    else{
    string += e.target.innerHTML;
    input.value = string;
    }
  });
});
