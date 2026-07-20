// for of loop is specially for arrays only
let arr = [1,2,3,4,5,6,7,8,9];
for(let num of arr){
    console.log(num)
}

let arr1 =["Bikash","Satyam","Dhiman","Satya","Justin"]
for(let name of arr1){
    if(name == "Satyam"){
        console.log("He is from Adtu")
    }else{
        console.log("He is from Amity")
    }
}

// let firstStudent = std[0];


// for(let i=0; i<firstStudent.length; i++){
//     console.log(firstStudent[i])
// }



// let num = 1;


// while(num<10){
//     console.log("while loop is running");


//     num++;
// }







//for in loop, this loop is specially used in objects



let obj = {
    name: "Suraj",
    uni: "ADTU",
    course: "Btech",
    year: 3,
    isAlumni: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobbies: {
        games: ["Cricket", "Football"],
        listening: "Starboy",
    },
    67:"test"
}



///Find which subject has maximum marks along with subject name

let obj1 = {
    maths:100,
    english:89,
    science:67,
    punjabi:88
}
let max = 0
let sub = ""
for (let i in obj1){
    if(obj1[i]>max){
        max = obj1[i]
        sub = i
    }
}
console.log(sub, max)


//ES6:- Ecma script 6, commonJS


// let, const, arrow function


const arrowFun = (a, b, c) => {
    let out = a + b + c;


    console.log(out)
}


arrowFun(89, 89, 89)


// arrowFun(10, 20, 30)   //invoking the function
// arrowFun(10, 60, 40)


// arrowFun(178, 567, 4563)


// arrowFun(78654, 87634, 976345) //arguments



console.log(batch)


var batch = "FS";
