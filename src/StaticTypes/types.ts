let myString: string;
let myNumber: number;
let myBoolean: boolean;
let anyVar: any;


myString = `Hello World`.slice(0,5);
myNumber = 5 + 5;
myBoolean = false;
anyVar = 1 + '3' // can take any value


// Arrays

let stringArray: Array<string>;
let numberArray: Array<number>;
let booleanArray: Array<boolean>;

let stringArrayTwo: string[];
let numberArrayTwo: number[];
let booleanArrayTwo: boolean[];
let arrayOfAny: any[];

let voidVariable: void = undefined;
let nullVariable: null = null;
let undefinedVariable: undefined = null;

export function printTypes() {
    console.log('String ===>', myString);
    console.log('myNumber ===>', myNumber);
    console.log('myBoolean ===>', myBoolean);
    console.log('anyVar ===>', anyVar);
}
