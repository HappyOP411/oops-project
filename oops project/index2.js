// que1
class person{
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
      }
      details(){
        console.log(`name ${this.name}, age ${this.age}, country ${this.country}`)
      }
}
const person1 = new person (`harpal`, 20 , `india`)
const person2 = new person (`dharmik`, 23 , `india`)
console.log(person1);
console.log(person2);

// que2
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log("Area:", rect.area());
  console.log("Perimeter:", rect.perimeter());

//   que3

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    display() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    display() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2020, 4);
  myCar.display();

// que 4
class BankAccount {
    constructor(accountNumber, balance = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  }
  let account1 = new BankAccount("12345", 1000)
  let account2 = new BankAccount("67890", 5000)
  
  account1.deposit(500)
  account2.deposit(200)
  account1.withdraw(300)
  account2.withdraw(700)
  
  console.log(account1)
  console.log(account2)
  
//   que 5

class Shape {
    area() {
      return 0;
    }
  }
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius
    }
    area() {
      return Math.PI * this.radius * this.radius
    }
  }
  class Triangle extends Shape {
    constructor(base, height) {
      super()
      this.base = base
      this.height = height
    }
    area() {
      return (this.base * this.height) / 2
    }
  }

  let circle = new Circle(5)
  let triangle = new Triangle(4, 6)
  console.log(circle.area())
  console.log(triangle.area())

  // que 6 
  class Employee {
    constructor(name, salary) {
      this.name = name
      this.salary = salary
    }
  
    calculateAnnualSalary() {
      return this.salary * 12
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary)
      this.department = department
    }
  
    calculateAnnualSalary() {
      return (this.salary * 12) + 5000
    }
  }
  
  const manager1 = new Manager('harpal', 6000, 'HR')
  const manager2 = new Manager('dharmik', 7000, 'IT')
  
  console.log(manager1.calculateAnnualSalary())
  console.log(manager2.calculateAnnualSalary())
// que 7

class Book {
  constructor(title, author, publicationYear) {
    this.title = title
    this.author = author
    this.publicationYear = publicationYear
  }

  displayDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`)
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear)
    this.price = price
  }

  displayDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}, Price: $${this.price}`)
  }
}

const ebook1 = new Ebook('self-belive', 'harpal', 2020, 99)
ebook1.displayDetails()

// que 8

class Animal {
  constructor(species, sound) {
    this.species = species
    this.sound = sound
  }

  makeSound() {
    console.log(this.sound)
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound)
    this.color = color
  }
  makeSound() {
    console.log(`${this.sound} - The dog's color is ${this.color}`)
  }
}
const dog1 = new Dog('Dog', 'Bhav-bhav', 'Black');
dog1.makeSound()
