export default class Count{
    // explicar lo siguiente
    //public
    //private -- => solo en la propia clase
    //protected --> dentro de la propia clase y clases que heredan
    //Parameter properties

    //method Overloading
    public count( metric: string, value: number, rate: number, tags: string[] ) : void;
    public count( metric: string, value: number, tags: string[] ) : void;
    public count( metric: string, value: number, rate: number ) : void;
    public count( metric: string, value: number ) : Count; // <--- Overloaded return type.

    public count( metric: any, value: any, arg3?:any, arg4?:any ) {

        if (Array.isArray(arg4)) {

            console.log(' Cuando Arg4 is Array');

        } else if (Array.isArray(arg3)) {

            console.log(' Cuando Arg3 is Array');

        } else if (arg3 !== undefined) {

            console.log(' Cuando Arg3 esta definido y no es arreglo');

        } else {

            console.log(' Cuando no hay Arg4 ni Arg3');

            return (this);
        }
    }
}
