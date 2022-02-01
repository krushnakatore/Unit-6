let container = document.getElementById("newcont");

var value = 1;
container.addEventListener('scroll' ,()=>{

if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
 add();
 
 }

});

function add() {
let i = 0;
 
while( i < 25){


    let div = document.createElement("div");

    div.classList.add("div")

    div.innerHTML = `Masai School : ${value++}`
   
    container.append(div);

    console.log(i);

    i++;

  }

}
add(); 


