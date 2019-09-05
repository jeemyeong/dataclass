// https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript
type IfEquals<X, Y, A, B> =
  (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeysOf<T> = {
  [P in keyof T]: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never>
}[keyof T];
type WritablePart<T> = Pick<T, WritableKeysOf<T>>;

// https://github.com/microsoft/TypeScript/issues/3895#issuecomment-488355369
type ExcludeMethods<T> =
  Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? never : K }[keyof T]>;

type ExcludeNullable<T> =
  Pick<T, { [K in keyof T]: null extends T[K] ? never : undefined extends T[K] ? never : K }[keyof T]>;

type PickNullable<T> =
  Pick<T, { [K in keyof T]: null extends T[K] ? K : undefined extends T[K] ? K : never }[keyof T]>;

type Merge<A, B> = {
  [K in keyof A & keyof B]: A[K] | B[K]
}

type AsOptional<T> = {
  [P in keyof T]?: T[P];
}

export abstract class Dataclass<T> {
  public constructor(initializer: Merge<ExcludeMethods<WritablePart<T>>, ExcludeNullable<WritablePart<T>>> & AsOptional<PickNullable<WritablePart<T>>>) {
    Object.assign(this, initializer);
  }
}