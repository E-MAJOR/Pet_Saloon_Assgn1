
// let eric={
//     name:"Eric",
//     email:"eric@gmail.com",
//     gpa:3.9
// }
// let david={
//     name:"David",
//     email:"david@gmail.com",
//     gpa:4.0
// }

// let davion={
//     name:"Davion",
//     email:"davion@gmail.com",
//     gpa:3.2
// }

// let will={
//     name:"Will",
//     email:"will@gmail.com",
//     gpa:2.8,
// }

// //let students; //empty array
// let students=[eric, david, davion, will, 'Mark', 'Michael', 'Regis', 'Brandon'];
// console.log(students);
// console.log(students[3]);
// students[3]="Miguel";
// console.log(students[3]);

// for(let i=0; i<8; i++){
//     document.write(`<li> ${students[i]} </li>`);
// }

// let gpa=[2.5, 3.1, 4.0, 3.6, 2.9, 2.8];
// let total=0;
// for(let j=0; j<gpa.length;j++){
//     document.write(`<li> ${gpa[j]}</li>`);
//     total+=gpa[j];
//     console.log(`Iteration ${j} = ${total}`);
// }
//     document.write(total);

    let eric={
        name:"Eric",
        email:"eric@gmail.com",
        gpa:3.9
    }
    let david={
        name:"David",
        email:"david@gmail.com",
        gpa:4.0
    }
    
    let davion={
        name:"Davion",
        email:"davion@gmail.com",
        gpa:3.2
    }
    
    let will={
        name:"Will",
        email:"will@gmail.com",
        gpa:2.8,
    }
    
    //let students; //empty array
    let students=[eric, david, davion, will, 'Mark', 'Michael', 'Regis', 'Brandon'];
    console.log(students);
    console.log(students[3]);
    students[3]="Miguel";
    console.log(students[3]);
    
    for(let i=0; i<8; i++){
        document.write(`<li> ${students[i]} </li>`);
    }
    
    let gpa=[2.5, 3.1, 4.0, 3.6, 2.9, 2.8];
    let total=0;
    for(let j=0; j<gpa.length;j++){
        document.write(`<li> ${gpa[j]}</li>`);
        total+=gpa[j];
        console.log(`Iteration ${j} = ${total}`);
    }
        document.write(total);
    
    