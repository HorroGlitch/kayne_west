import './style.css'

let citation = document.querySelector("#kanyeCitation");
let ajouteUneCitation = document.querySelector("#ajouteUneCitation")


let tableauDeCitation = [];

function addElement() {
  fetch("https://api.kanye.rest/").then((response)=>{
  return response.json().then((data)=>{
    console.log(data);

    citation.textContent = data.quote;

    let laCitationDuDebileDeWest = data.quote;

    if (tableauDeCitation.includes(laCitationDuDebileDeWest)) {
      console.log("La citation est déjà dans la liste !");
    } else {
      tableauDeCitation.push(laCitationDuDebileDeWest);

      let newElement = document.createElement("li");

      let newContent = document.createTextNode(laCitationDuDebileDeWest);

      newElement.appendChild(newContent);

      let currentDiv = document.getElementById("ul");
      document.body.insertBefore(newElement, currentDiv);
    }



  })
})
  
}

ajouteUneCitation.addEventListener("click", ()=>{
  addElement();
});
// let DeuxièmeCitation = document.querySelector("#DeuxièmeCitation");

// async function getData(){

//   let response = await fetch("https://api.kanye.rest/");
//   let data = await response.json();
//   console.log(data);
//   DeuxièmeCitation.textContent = data.quote;
//   }

//   getData();