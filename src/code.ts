import { printTypes } from './StaticTypes/types';
import Count from './Classes/Count';
import { getInfo } from './Functions/functions';
import Observable, { logEvent }  from './rxjs/learn';
import './css/_styles.scss';

import myObservable from './rxjs/observable'

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


// logEvent(document.getElementById('mainBody')).subscribe(
    //     event => { }
    // )

myObservable.subscribe( (value: any) => {
    console.log('Value Emmitted => ', value);
});