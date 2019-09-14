import { printTypes } from './StaticTypes/types';


import Count from './Classes/Count';
import { getInfo } from './Functions/functions';

printTypes();

const MyCount = new Count();

MyCount.count('Metrica', 4, 4, ['tag1', 'tag2']);
MyCount.count('Metrica', 4, 4);
MyCount.count('Metrica', 4,['tag1', 'tag2']);
MyCount.count('Metrica', 4);

console.log(getInfo('Gabriel', 'Lopez', 35));
console.log(getInfo('Gabriel', 'Lopez', 35));
console.log(getInfo('Gabriel', 'Lopez', 35));
console.log(getInfo('Gabriel', 'Lopez', 35));