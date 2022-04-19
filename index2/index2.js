const table = document.getElementById('table');
const tr = document.getElementById('tr');
const colors = document.querySelectorAll ('.color');
const buttons = document.querySelectorAll('button')

console.log(buttons)
console.log(colors);

colors.forEach( (color) => {
    color.style.backgroundColor = color.innerHTML;
})

// buttons.addEventListener('click',()=>{
//     if ()
// })
// const users = [{
//     name: 'decathlon',
//     adress : '3 rue des rois',
//     color : "green"
// },
// {
//     name : 'nike ',
//     adress : 'rue du bourg',
//     color : 'red'

// }];

// users.forEach( (user) => {
    
//     tr.innerHTML += 
//         `<tr><td> ${ user.name } </td>
//          <td> ${ user.adress } </td>
//          <td ${ style.backgroundColor= user.color }>  </td><tr/>`;

    
//     //    if( user.color==="red"){
//     //        color.style.backgroundColor ="red";
//     //    }
//     //    else if (user.color==="green"){
//     //        color.style.backgroundColor ="green";
//     //    }
    
         
// })