console.log('started script.js')

const obj = {
    name: 'name',
    age: 30,
    primarySkill: 'Developer',
}

class Person {
    name = 'name';
    age = 30;

    constructor(name) {
        if(name){
            this.name = name
        }
    }

    increment(){
        this.age = this.age + 1;
    }
}

const p = new Person('Alex');

p.increment()

console.log(p)


