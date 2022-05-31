const input1 = document.querySelector(".sprachen");
const add1 = document.getElementById("add");
const delete1 = document.getElementById("delete");

const list1 = document.getElementById("list");

const ul = document.createElement("ul");
list1.appendChild(ul);

add1.addEventListener("click", function() {
    if(!input1.value) {
        alert("eine Programmiersprache eingeben!");
    } else {
        ul.innerHTML += `<li>${input1.value}</li>`;
        input1.value = "";
        
    }
})


