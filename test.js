class myclass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const instance = new myclass('John');
instance.greet();