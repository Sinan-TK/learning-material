//Call method//

const user={
    name : "Sinan",
    age: 19
}

function Call(name,age){
    console.log(`Hello,,  My name is ${this.name}. I am ${this.age}old`);
}

Call.call(user,user.name,user.age);

//-------------------------------------------------------------------------------//

//Apply method//