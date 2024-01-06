const inputBox = document.getElementById("textField");
const textEnterContainer = document.getElementById("list-container");
const botton = document.querySelector(".btn");

botton.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Please write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    textEnterContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
    savedata();
  }
  inputBox.value = "";
});

textEnterContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.nodeName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", textEnterContainer.innerHTML);
}

function showData() {
  textEnterContainer.innerHTML = localStorage.getItem("data");
}
showData();

/////////////////////////////////---------------------------------////////////////////////////////////////

const arr = [{ name: "pathan", id: 1 }];
const arr1 = [...arr, { name: "raj", id: 2 }];
const arr2 = [...arr1, { name: "Rajmala", id: 3 }];
const data = arr2.map((elem) => {
  return { name: elem.name };
});
console.log(data);
