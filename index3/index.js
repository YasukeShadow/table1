const table = document.getElementsByClassName("table")
const th = document.getElementsByClassName("th");
const tr = document.getElementsByClassName("tr")
const td = document.getElementsByClassName("td");
const tbody =document.querySelector ('tbody');
const colors = document.querySelectorAll('.colors');
const span = document.getElementsByTagName('span');

const Users = [{
    name: 'decathlon',
    adress : '3 rue des rois',
    status : "positif",
    color : "green"
},
{
    name : 'nike ',
    adress : 'rue du bourg',
    status : "negatif",
    color : 'red'

},
{
    name : 'lidl',
    adress : 'rue des faubourg',
    status : 'neutre',
    color : 'orange'
},
{
    name : 'kfc',
    adress : 'rue des poulets',
    status : 'positif',
    color : "green"

}];

Users.forEach( (user) => {
    console.log(user.adress);
    tbody.innerHTML += 
    `
        <tr> 
            <td>${user.name}</td>
            <td> ${ user.adress}</td>
            <td> ${ user.status}</td>
            <td> ${user.color}</td>

            
        </tr> 

    
    `;
    
    colors.forEach( (color) => {
        color.style.backgroundColor = user.color;
    
    })
    
    
    
    




    
    
})

colors.forEach( (color) => {
    color.style.backgroundColor = color.innerHTML;

})





