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