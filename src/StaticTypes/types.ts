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


// type FRUTA_CORTAR_FRUTA = '[FRUTA] CORTAR FRUTA'
// type FRUTA_COMER_FRUTA = '[FRUTA] COMER FRUTA'

// type GUISADO_COCINAR_GUISADO = '[GUISADO] COCINAR'
// type GUISADO_COMER_GUISADO = '[GUISADO] COMER'

// type FrutaActions = FRUTA_CORTAR_FRUTA | FRUTA_COMER_FRUTA
// type GuisadoActions =  GUISADO_COCINAR_GUISADO | GUISADO_COMER_GUISADO

// const enum FRUTA_ACTIONS {
//     FRUTA_CORTAR_FRUTA = '[FRUTA] CORTAR FRUTA',
//     FRUTA_COMER_FRUTA = '[FRUTA] COMER FRUTA'
// }

// interface ObjetoBase{
//     nombre?: string;
// }

// interface Fruta extends ObjetoBase{
//     numeroFrutas?: number;
// }

// interface Guisado extends ObjetoBase{
//     tiempoCoccion?: number
// }

// class Action<T, P> {
//     readonly type: T
//     constructor(type: T , public payload: P){
//         this.type = type;
//     }
// }

// const myAction = new Action<FRUTA_ACTIONS, Guisado>(FRUTA_ACTIONS.FRUTA_COMER_FRUTA,{});