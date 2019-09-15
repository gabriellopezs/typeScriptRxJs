import { Observable, Observer } from 'rxjs'

const myObservable = Observable.create( (observer: Observer<any>) => {
    observer.next(' Emitir un valor')
})

export default myObservable
