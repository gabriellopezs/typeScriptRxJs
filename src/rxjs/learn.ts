import { Observable, from, fromEvent, interval, of, Subject, ObservableInput } from 'rxjs';
import { filter, tap, map, exhaustMap, takeUntil, repeat, take, switchMap, startWith, skipWhile, timeout, min, max } from 'rxjs/operators';
import axios from 'axios';
import Axios from 'axios-observable';

const myObservable = from([1, 2, 34, 45, 1]).pipe(
    filter(value => value > 10),
    tap(value => value + 5),
    map(value => value + 10),
    min(),
    max()
);

// explicar diferencia entre switchMap y exhaustMap
export const logEvent = (nodeElement: any): Observable<MouseEvent> => {
    return fromEvent<MouseEvent>(nodeElement, 'mousedown').pipe(
        switchMap(value => fromEvent<MouseEvent>(nodeElement, 'mousemove'))
        , tap((event) => console.log('Mouse is Moving', event.clientX, event.clientY))
        , takeUntil(fromEvent(nodeElement, 'mouseup'))
        , repeat()
    )
}

export const exhaustExample = fromEvent<MouseEvent>(document, 'click').pipe(
    exhaustMap(ev => interval(1000).pipe(take(5)))
)

export const switchMapExample = fromEvent(document, 'click').pipe(
    switchMap(ev => interval(1000).pipe(take(5)))
)

export const switchMapWithAxios = interval(1500).pipe(
    skipWhile(ev => ev < 1),
    switchMap(ev => axios.get('https://jsonplaceholder.typicode.com/todos/' + ev)),
    take(5)
)

export const takeUntilSubject = new Subject();

export const switchMapCancellable = interval(2000).pipe(
    // export const switchMapCancellable  = fromEvent(document, 'click').pipe( 
    switchMap(ev => {
        return from(Axios.get('https://httpstat.us/200?sleep=5000'))
    }),
    takeUntil(takeUntilSubject)
)

export default myObservable;
