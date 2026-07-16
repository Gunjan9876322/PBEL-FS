let obj ={
    name:"Gunjan",
    uni: "Adtu",
    course:"B.tech",
    year: 3,
    isAlumni: false,
    sub:["FS","AI","DL","ML"],
    hobbies: {
        games:["cricket","football","chess"],
        music:["pop","rock","classical"],
        movies:["action","comedy","drama"]
    }
}
let firstValue = obj["name"];
console.log(firstValue);
obj["course"] = "M.tech";
console.log(obj["course"]);
let deletedKetvalue = delete obj["year"];
console.log(deletedKetvalue);
console.log(obj);

let num = 10;
for(let i = 0 ; i<num; i++){
       console.log(i)
}

let std = ["Nishita","Gunjan","Rohit","Rohan","Ravi"];
for(let i = 0; i<std.length; i++){
    for(let j = 0; j<std[i].length; j++){
    console.log(std[i][j])
}
}

let alph = "abcdefghijklmnopqrstuvwxyz";


for (let i=0; i<alph.length; i++){
    if(i%2==0){
        console.log("This Alphabet", alph[i], "on even index" );
        if(i==10){
            console.log("This alphabet is not special", alph[i])
        }
    }else{
        console.log("This Alphabet", alph[i], "on odd index" );
        if(i==17){
            console.log("This alphabet is not special", alph[i])
        }
    }
}



//let firstStudent = std[0];
//for(let i = 0; i<firstStudent.length; i++){
 //   console.log(firstStudent[i])
//}