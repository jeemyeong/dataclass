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