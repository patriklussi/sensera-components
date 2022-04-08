export default function helloThere(){
    console.log("Hello there");

}

export default function renderThing(){
   let tempName = document.createElement("p");
   tempName.innerHTML="Wax on wax off"
    document.appendChild(tempName);
}

