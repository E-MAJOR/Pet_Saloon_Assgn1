console.log('Register page');
let saloon={
    name:"Pets R Us",
    address:{
        street:"University",
        number: "758-K",
        zip: 22560,
        state:"CA",
        city:"San Diego"
    },
    hours:{
        open:"09:00",
        close: "20:00"
    },
    pets:[
        {
            name:"Scooby",
            age:8,
            gender:'male',
            breed:'Dane',
            service:'Grooming',
            owner:'Shaggy',
            phone:555-555-5555
        },
        {
            name:"Star",
            age:10,
            gender:'female',
            breed:'Collie',
            service:'Nails but',
            owner:'Shaggy',
            phone:777-777-7777
        },
        {
            name:"Smokey",
            age:13,
            gender:'male',
            breed:'Lasha',
            service:'Grooming',
            owner:'Mark',
            phone:888-888-8888
        },
        {
            name:"Drake",
            age:5,
            gender:'male',
            breed:'Bulldog',
            service:'Nails but',
            owner:'Cindy',
            phone:555-555-9999
        },
    ]
}
console.log(saloon.address.city);
console.log(saloon.pets);
// display in alert the amount of pets
alert(`${saloon.pets.length} registered pets`);

function simpleDisplay(){
    // iterate through the array
    for(let i = 0; i<saloon.pets.length; i++){
        console.log(`${saloon.pets[i].name}`);
    }

}

simpleDisplay();

// function simpleDisplay2(){
//     let i=0;
//     while(saloon.pets[i]!=undefined){
//         i++;
//         console.log(`${saloon.pets[i].name}`);
//     }
// }
// simpleDisplay2();
