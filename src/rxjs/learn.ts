import { Observable, from, fromEvent } from 'rxjs';
import { filter, tap, map, exhaustMap, takeUntil, repeat } from 'rxjs/operators';

const myObservable = from([1,2,34,45,1]).pipe(
    filter( value => value > 10),
    tap(value => value + 5),
    map(value => value + 10 )
);


export const logEvent = ( nodeElement: any ): Observable<MouseEvent> => {
    return fromEvent(nodeElement, 'mousedown').pipe(
        exhaustMap( value => fromEvent(nodeElement, 'mousemove'))
        ,tap( (event: MouseEvent) => {
            console.log('Mouse is Moving', event.clientX, event.clientY);
        })
        ,takeUntil(fromEvent(nodeElement, 'mouseup'))
        ,repeat()
    )
}

export default myObservable;
