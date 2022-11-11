//*Obtain the primitive keys from class that has value properties
export type Primitives<T> = {
    [key in keyof T]: T[key] extends { value: unknown }
    ? Pick<T[key], 'value'>['value']
    : T[key]
}
