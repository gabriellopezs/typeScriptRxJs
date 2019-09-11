
interface Point {
    readonly x: number;
    readonly y: number;
    z?: number;
    length: number;
    [propName: string]: any;
}


interface NumberDictionary {
    [index: string]: string | number;
    length: number;    // ok, length is a number
    // name: string;      // error, the type of 'name' is not a subtype of the indexer
}


function loggingIdentity<T>(arg: number): T {

    return {} as T;
}

loggingIdentity<Point>(3);

//Type assertion or infering
