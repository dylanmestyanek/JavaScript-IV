class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this. location = personProps.location;
    }

    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentProps)
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }

    listsSubjects(){
        return this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


const person1 = new Person({
  name: 'Bob',
  age: '23',
  location: 'Mississippi'
});

const person2 = new Person({
  name: 'Jazmine',
  age: '19',
  location: 'Kentucky'
});

const instructor1 = new Instructor({
  name: 'Kenny',
  age: '28',
  location: 'Los Angeles',
  specialty: 'JavaScript',
  favLanguage: 'React',
  catchPhrase: 'Did you try turning it off, and back on, again?'
});

const instructor2 = new Instructor({
  name: 'Michael',
  age: '32',
  location: 'New York',
  specialty: 'C++',
  favLanguage: 'C#',
  catchPhrase: 'Go New York Jets!!'
});

const student1 = new Student({
  name: 'Tommy',
  age: '25',
  location: 'Missouri',
  previousBackground: 'Line Cook at Del Taco',
  className: 'WEB23',
  favSubjects: ['CSS', 'HTML', 'JavaScript']
});

const student2 = new Student({
  name: 'Henry',
  age: '47',
  location: 'Michigan',
  previousBackground: 'Banker at Wells Fargo',
  className: 'WEB11',
  favSubjects: ['Java', 'Python', 'C#']
});

// console.log(person1.speak());
// console.log(person2.speak());
// console.log(instructor1.demo('JavaScript'));
// console.log(instructor2.grade({name: 'Michael'}, 'React test'));
// console.log(student1.listsSubjects());
// console.log(student1.PRAssignment('JavaScript Project'));
// console.log(student2.sprintChallenge('C#'))
