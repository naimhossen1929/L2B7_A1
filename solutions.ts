// Problem - 1

let filterEvenNumbers = (numbers: number[]) => {
  return numbers.filter((number) => number % 2 === 0 && number);
};

// Problem - 2

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

// Problem - 3

type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): StringOrNumber => {
  return typeof input === "string" ? "String" : "Number";
};

// Problem - 4

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

// Problem - 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return { ...obj, isRead: true };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// Problem - 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem - 7

const getIntersection = (arr1: number[], arr2: number[]) => {
  return arr1.filter((element) => arr2.includes(element));
};

getIntersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]);
