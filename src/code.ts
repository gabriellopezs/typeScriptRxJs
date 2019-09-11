import { printTypes } from './StaticTypes/types';

import * as fnc from './Functions/functions';
import Count from './Classes/Count';

printTypes();

console.log(fnc.getInfo('Gabriel', 'Lopez'));

const MyCount = new Count();
MyCount.count('Metrica', 4, 4, ['tag1', 'tag2']);
MyCount.count('Metrica', 4, 4);
MyCount.count('Metrica', 4,['tag1', 'tag2']);
MyCount.count('Metrica', 4);


