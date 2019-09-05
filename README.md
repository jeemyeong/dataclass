# redux-confirm [![npm version](https://badge.fury.io/js/%40jeemyeong%2Fdataclass.svg)](https://badge.fury.io/js/%40jeemyeong%2Fdataclass)

`dataclass` is like a data class from kotlin

### Features

- Written in TypeScript.

## Installation

```sh
$ npm i @jeemyeong/dataclass
```

```typescript
class Person extends Dataclass<Person> {
  name!: string;
  age!: number | null;
}

new Person({
  name: "Leo"
}); // OK

new Person({
  name: "Leo",
  age: 30
}); // OK

new Person({
  age: 30 // error
});
```
