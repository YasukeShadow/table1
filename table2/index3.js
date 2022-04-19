// parcourir et remplir un tableau avec ajout sur rendu visuel
const nom    = document.getElementById('nom');
const adress = document.getElementById('adress');
const statut = document.getElementById('statut');
const signal = document.getElementById('signal');
const submit = document.getElementById('submit');

const tbody  = document.querySelector('tbody');

const createAllTable = document.getElementById("createAllTable");
console.log(createAllTable);

createAllTable.addEventListener('click',()=> {
    
    let data =[nom.value, adress.value, statut.value, signal.value ]
    console.log(data);
    
    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (let i=0; i < data.length; i++)
        {
            let td = document.createElement("td");
            let tdText = document.createTextNode(data[i]);
            tr.appendChild(td);
            td.appendChild(tdText);
            
        
            
            
            nom.value = ""
            adress.value = ""
            statut.value = ""
            signal.value  = "";

            
        }


        let trLastChild = tr.lastElementChild;
        console.log(trLastChild);

        if (trLastChild.textContent === "red")
            {
                    trLastChild.style.background = "red";
                    trLastChild.textContent.style.visibility = "hidden";
            }
        else if (trLastChild.textContent === "green")
            {
                trLastChild.style.background = "green";
            }
        else if (trLastChild.textContent === "orange")
            {
                trLastChild.style.background = "orange";
            }

        else {
            alert("choisir la bonne couleur")
        }
        


        // trLastChild.ClassList.add(vert);
        // trLastChild.style.background = signal.value
})

//////////////////////////////////

fetch("data.json")
    .then( (result) => result.json())
    .then( (data) => console.log(data) )


///////////////////////////////
//  ajouter dans une base de donnée json avec json server . pour simuler les requetes vers un serveur qui contient  la base bdd

const init = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
    },
    body : JSON.stringify(
        // pseudo : "From Scratch",
        // message : "bonjour les gens",
        [["boulanger","rue des associé","plein","red"]]

    ),
    mode : "cors",
    credentials : "same-origin",
};

document.querySelector("form").addEventListener("submit", ()=> {
    fetch("http://localhost:3000/database",init)
        .then(()=> console.log("data ajouté"));
})