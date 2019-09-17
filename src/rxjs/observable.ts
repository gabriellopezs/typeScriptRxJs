import { Observable, Observer, interval } from 'rxjs'
import { share, shareReplay, map } from 'rxjs/operators'

export const myObservable = Observable.create( (observer: Observer<any>) => {
    observer.next(Math.random())
})

export const intervalObs = interval(1000).pipe(
    map( value => value * Math.random()),
    share()
);

export const hotObservable = myObservable.pipe(shareReplay())

