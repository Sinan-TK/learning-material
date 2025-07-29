//Call method//

const user={
    name : "Sinan",
    age: 19
}

function Call(name,age){
    console.log(`Hello, I am ${this.name}. I am ${this.age} years old`);
}

Call.call(user,user.name,user.age);

//-------------------------------------------------------------------------------//

//Apply method//


const user1 = {
    name : "Arjun",
    age: 18
}

function Apply(name,age){
    console.log(`Hello, I am ${name}. I am ${age} years old`);
}

Apply.apply(user1,[user1.name,user1.age]);

//-----------------------------------------------------------------------------------//

//bind method//

const user2 = { 
    name: "Ayoob",
    age: 22
}

function Bind(name,age){
    console.log(`Hello, I am ${name}. I am ${age} years old`)
};


const Binded  = Bind.bind(user2,user2.name,user2.age);

Binded();
