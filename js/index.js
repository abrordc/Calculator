
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
new Swal({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    icon: "warning",
    title: "tombol DEL masih ada bug mohon menggunakan tombol AC",
    didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
            string = string.substring((innerHTML = string));
        } else if (e.target.innerHTML == "DEL") {
            input.value = input.value.slice(0, -1);
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});