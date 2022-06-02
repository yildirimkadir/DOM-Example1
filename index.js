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
        javascriptKontrol();
    };
});
const javascriptKontrol = () => {
    document.querySelectorAll("ul li").forEach((x) => {
        const lowerSentence = x.textContent.toLowerCase();
        if (lowerSentence === "javascript") {
            x.setAttribute("class", "red");
        };
    });
};

delete1.addEventListener("click", () => {
    ul.childElementCount > 0 ? ul.removeChild(ul.lastElementChild) : alert("There is nothing for delete");
});
input1.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        add1.click();
    } else if (e.code === "Delete") {
        delete1.click();
    }
});

window.onload = () => {
    input1.focus();

};



