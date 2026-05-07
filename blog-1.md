# Why any Is Called a “Type Safety Hole” and Why unknown Is Safer

## Introduction

In TypeScript, both any and unknown can store any type of value. However, they behave differently in terms of type safety.

### any as a Type Safety Hole

The any type disables TypeScript’s type checking.

let value: any = 10;

value.toUpperCase(); // No TypeScript error

Even though toUpperCase() does not work on numbers, TypeScript allows it. This can cause runtime errors, so any is called a type safety hole.

### Why unknown Is Safer

The unknown type is safer because TypeScript forces you to check the type before using it.

let value: unknown = "Hello";

if (typeof value === "string") {
console.log(value.toUpperCase());
}

Here, the code becomes safe after checking the type.

### Type Narrowing

Type narrowing means converting a broad type like unknown into a specific type using checks such as:

typeof
instanceof
in

This helps TypeScript understand the exact type of a variable.

## Conclusion

any removes type safety and may create runtime errors, while unknown keeps the program safer by requiring type checks. Type narrowing is the process of safely identifying and using the correct type.
