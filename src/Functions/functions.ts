export const sum = (number1: number, number2: number): number => number1 + number2;

export function getInfo(name: string, lastName: string, moreData?: number | string): string {
    let moreDataValue = '';

    /*
    if(moreData) {
        moreDataValue = isNumber(moreData) ? ` La edad es: ${moreData + 1}` : moreData;
    }
    */

     if(isString(moreData)){
         moreDataValue = moreData;
     } else {
         moreDataValue = ` La Edad es: ${ moreData + 1}`
     }

    return `${name} ${lastName}. ${moreDataValue}`;
}


function isNumber(x: any): x is number {  // type predicate
    return typeof x === 'number'
}

const isString = (x: any):x is string => typeof x === 'string';
