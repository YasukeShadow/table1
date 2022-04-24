// afficher à partir d'un bouton avec base de donnée dans fichier json
// fetch
// const p = document.querySelector("p");


// fetch("data.json")
//     .then( (response) => response.json())
//     .then( (data) => console.log(data.database))
//     .then( (dataResponse) => 
        
//         {
           
//             dataResponse.forEach( (ladata) =>
//                 {   
//                     console.log(ladata)
//                     //p.innerHTML += `<span> ${ ladata} </span>`
//                 })
//         })

    const nom    = document.getElementById('nom');
    const adress = document.getElementById('adress');
    const statut = document.getElementById('statut');
    const signal = document.getElementById('signal');
    
    const form =document.querySelector('form');


    

    form.addEventListener('submit',()=>
        {
            console.log(nom.value)
        

        const init = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({

                nom :  nom.value,
                adress : adress.value,
                statut : statut.value,
                signal : signal.value

                }),               
        
           
            mode : "cors",
            credentials : "same-origin",
        };
        
        
            fetch("http://localhost:3000/dataUser",init)
                .then(()=> console.log("data ajouté"));
        
    })


    ///////////////
    // 
    const tbody = document.querySelector('tbody');
    let object
    
    fetch ("http://localhost:3000/dataUser") // alller chercher la bdd json 
        .then( (data) => data.json())// 
        .then( (result) => object = result) 
        .then( (objectResult) => 
                {
                    //console.log(objectResult[0].nom);

                    const createAllTable = document.getElementById("createAllTable");
                    // const tr = document.createElement("tr");
                    // const td = document.createElement("td");
                    // tbody.appendChild(tr);
                    // tr.appendChild(td);
                    //  let textTable = document.createTextNode;
                    //  td.appendChild(textTable);
                    //console.log(objectResult);
                    createAllTable.addEventListener("click", () =>
                            {
                               
                                //td.appendChild(textTable);
                                //console.log(objectResult) 
                                for ( let i = 0; i <objectResult.length; i++ )
                                {
                                    const tr = document.createElement("tr");
                                    tbody.appendChild(tr);

                                    for (let j = 0 ; j<objectResult.length ; j++)
                                        {
                                            const td = document.createElement("td");
                                            tr.appendChild(td);

                                            td.foreach()
                                            const tableText = document.createTextNode(objetResult);
                                            td.appendChild(tableText);
                                            tableText.textContent = objectResult[j].foreach()

                                        }

                                    console.log(objectResult[i].nom)
                                }
                            })
                });


        //console.log(object);