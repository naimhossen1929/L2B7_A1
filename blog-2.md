# How the Four Pillars of OOP Help in Large TypeScript Projects

## Introduction

In TypeScript, OOP (Object-Oriented Programming) helps us organize code in a better way. The four main pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism. These make big projects easier to manage and understand.

### 1.Encapsulation

Encapsulation means keeping data inside a class and not allowing direct access from outside.

It helps because:

It protects data from wrong changes
It keeps code clean and safe

class BankAccount {
private balance: number = 0;

deposit(amount: number) {
this.balance += amount;
}

getBalance() {
return this.balance;
}
}

Here, balance cannot be changed directly from outside the class.

### 2.Abstraction

Abstraction means hiding details and showing only important features.

It helps because:

It makes code simple to use
We don’t need to know internal details
interface Payment {
pay(amount: number): void;
}

class CardPayment implements Payment {
pay(amount: number) {
console.log("Payment done:", amount);
}
}

We only call pay(), without worrying how it works inside.

### 3.Inheritance

Inheritance means one class can use features of another class.

It helps because:

We don’t repeat code
We can reuse existing logic
class Animal {
move() {
console.log("Animal is moving");
}
}

class Dog extends Animal {
bark() {
console.log("Dog is barking");
}
}

Dog can use move() from Animal.

### 4.Polymorphism

Polymorphism means same function can behave in different ways.

It helps because:

We don’t need many if-else conditions
Code becomes flexible
class PaymentMethod {
pay(amount: number) {}
}

class CashPayment extends PaymentMethod {
pay(amount: number) {
console.log("Paid with cash:", amount);
}
}

class CardPayment extends PaymentMethod {
pay(amount: number) {
console.log("Paid with card:", amount);
}
}
function processPayment(method: PaymentMethod) {
method.pay(100);
}

## Conclusion

The four pillars of OOP help us make big TypeScript projects easier:

Encapsulation keeps data safe
Abstraction hides complex details
Inheritance helps reuse code
Polymorphism makes code flexible

Together, they make code simple, clean, and easy to manage.
