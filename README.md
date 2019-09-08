# dataclass [![npm version](https://badge.fury.io/js/%40jeemyeong%2Fdataclass.svg)](https://badge.fury.io/js/%40jeemyeong%2Fdataclass)

`dataclass` is like a data class from kotlin

### Features

- Written in TypeScript.

## Installation

```sh
$ npm i @jeemyeong/dataclass
```

## Usage
```typescript
class Person {
  name!: string;
  language: string | null;
  public constructor(initializer: Initializer<Person>) {
    this.language = null;
    Object.assign(this, initializer);
  }
}

const p1 = new Person({
  name: "Leo"
}); // OK

const p2 = new Person({
  name: "Leo",
  language: "Korean",
}); // OK

const p3 = new Person({
  name: "Leo",
  age: 30 // error
});
```
