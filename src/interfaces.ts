interface User {
    name: string;
    age?: number;
    getMessage(): string
}


const user: User = {
    name: "Master",
    age: 30,
    getMessage() {
        return "Hello" ;
    },
};

const user2: User = {
    name: "Jack",
    getMessage() {
        return "Bye" ;
    },
    
};
console.log(user.getMessage())