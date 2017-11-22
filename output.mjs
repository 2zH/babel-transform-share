import ramda from 'ramda';

const { map, filter } = ramda;

const array = [1, 2, 3, 4, 5];

const result_1 = filter(n => n % 3 == 0)(map(n => n * 2)(array));

const result_2 = filter(n => n % 3 == 0)(map(n => n * 2)(array));