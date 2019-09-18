import { printTypes } from './StaticTypes/types';
import Count from './Classes/Count';
import { getInfo } from './Functions/functions';
import Observable, {
    logEvent
    , exhaustExample
    , switchMapExample
    , switchMapWithAxios
    , switchMapCancellable
    , takeUntilSubject
} from './rxjs/learn';
import './css/_styles.scss';

import { myObservable, hotObservable, intervalObs } from './rxjs/observable'
import { take, debounceTime, takeUntil, repeat, exhaustMap, exhaust, takeWhile, switchMap, mergeMap, skipUntil, map, mergeAll, throttle, tap, switchMapTo, timeout, retry, min, max, combineAll, mapTo, concatMapTo, concatAll } from 'rxjs/operators';
import { fromEvent, from, interval, Subject, combineLatest, of } from 'rxjs';


import Axios from 'axios-observable';
import { type } from 'os';

const bodyRef = document.getElementById('mainBody');
const buttonIniciar = document.getElementsByClassName('btn-success')
const buttonDetener = document.getElementsByClassName('btn-danger')

// printTypes();

// const MyCount = new Count();

// MyCount.count('Metrica', 4, 4, ['tag1', 'tag2']);
// MyCount.count('Metrica', 4, 4);
// MyCount.count('Metrica', 4,['tag1', 'tag2']);
// MyCount.count('Metrica', 4);

// console.log(getInfo('Gabriel', 'Lopez', 35));
// console.log(getInfo('Gabriel', 'Lopez', 35));
// console.log(getInfo('Gabriel', 'Lopez', 35));
// console.log(getInfo('Gabriel', 'Lopez', 35));

// Observable.subscribe(
//     value => console.log('Value from Observable =>> ', value)
// )

// hotObservable.subscribe((value: any) => {
//     console.log('Value from First  => ', value);
// });

// hotObservable.subscribe((value: any) => {
//     console.log('Value From Second => ', value);
// });

// logEvent(document.getElementById('mainBody')).subscribe(
//     event => { }
// )

// exhaustExample.subscribe( value => console.log('Exhaust Example => ', value));

// switchMapExample.subscribe(value => console.log('switchMap Example ===> ', value))
// switchMapWithAxios.subscribe(value => console.log('switchMapAxios Example ===> ', value))

// switchMapCancellable.subscribe({
//     next: value => console.log('switchMap Example ===> ', value),
//     error: value => console.log('switchMap ERROR ===> ', value),
//     complete: () => {console.log('switchMap COMPLETE' )}
// })

// fromEvent(document,'click').subscribe( click => takeUntilSubject.next());

// intervalObs.pipe(
//     skipUntil(fromEvent(document.getElementById('mainBody'), 'mousedown')),
//     takeUntil(fromEvent(document.getElementById('mainBody'), 'mouseup')),
//     repeat()
// ).subscribe(
//     value => console.log('From First====>', value)
// );   

// fromEvent(bodyRef,'mousemove').subscribe( value => console.log(value));
// fromEvent(bodyRef,'mousedown').subscribe( value => console.log(value));

// const streamCombinado$ = combineLatest(
//     from(Axios.get('https://httpstat.us/200?sleep=5000')),
//     from(Axios.get('https://httpstat.us/200?sleep=1000'))
// ).pipe(
//     timeout(6000),
//     retry(2)
// )

// fromEvent(buttonIniciar, 'click').pipe(
//     exhaustMap( ev => streamCombinado$)
// ).subscribe(([resultOne, resultTwo]) => {
//     console.log('Result ONE ===> ', resultOne)
//     console.log('Result TWO ===> ', resultTwo)
// });

//Cancelar invocación
// fromEvent(buttonIniciar, 'click').pipe(
//     switchMap(ev => streamCombinado$),
//     takeUntil(fromEvent(buttonDetener, 'click')),
//     repeat()
// ).subscribe({
//     next: ([resultOne, resultTwo]) => {
//         console.log('Result ONE ===> ', resultOne)
//         console.log('Result TWO ===> ', resultTwo)
//     }, error: error => console.log(error)
// });


// const Obsy = from([1,2,3,45,6]).pipe(
//     min(),
//     mergeMap( value => {
//         const getMax = from([1,2,3,45,6]).pipe(max())
//         return from([of(value),getMax]).pipe(combineAll())
//     })    
// )
// .subscribe( value => console.log('Valor: ', value))


type FRUTA_CORTAR_FRUTA = '[FRUTA] CORTAR FRUTA'
type FRUTA_COMER_FRUTA = '[FRUTA] COMER FRUTA'

type GUISADO_COCINAR_GUISADO = '[GUISADO] COCINAR'
type GUISADO_COMER_GUISADO = '[GUISADO] COMER'

type FrutaActions = FRUTA_CORTAR_FRUTA | FRUTA_COMER_FRUTA
type GuisadoActions =  GUISADO_COCINAR_GUISADO | GUISADO_COMER_GUISADO

const enum FRUTA_ACTIONS {
    FRUTA_CORTAR_FRUTA = '[FRUTA] CORTAR FRUTA',
    FRUTA_COMER_FRUTA = '[FRUTA] COMER FRUTA'
}

interface ObjetoBase{
    nombre?: string;
}

interface Fruta extends ObjetoBase{
    numeroFrutas?: number;
}

interface Guisado extends ObjetoBase{
    tiempoCoccion?: number
}

class Action<T, P> {
    readonly type: T
    constructor(type: T , public payload: P){
        this.type = type;
    }
}

const myAction = new Action<FRUTA_ACTIONS, Guisado>(FRUTA_ACTIONS.FRUTA_COMER_FRUTA,{});