let inputField = document.getElementsByClassName("inputField");
let push = document.getElementById("push");
let tasks = document.getElementById("tasks");


  push.addEventListener("click", () => {
   if(inputField[0].value != ""){
    let paper = `<div class="paper"><p>${inputField[0].value}</p><button class="delete">Delete</button></div>`
    
    tasks.innerHTML = tasks.innerHTML + paper;
    let forDelete = document.getElementsByClassName("delete");
    for(let i = 0; i < forDelete.length; i++){
      forDelete[i].addEventListener("click", (e) => {
        e.target.parentElement.remove()
        console.log(e.target);
      })
    }
    inputField[0].value = '';
   } else{
    alert('cart')
   }
    })

    let  deleteAll = document.getElementById("deleteAll");
    deleteAll.addEventListener("click", () => {
      tasks.innerHTML = "";
    })






