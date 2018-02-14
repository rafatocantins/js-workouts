var str = 'jkjewiejwbdyuceacejksp23jk534fjk';
//match
//test

str.match(/wb/);
/ces/.test(str);// true
/xcv/.test(str);//false

str.match(/wb/); // [ 'wb', index: 8, input: 'jkjewiejwbdyuceacesp23534f' ]

// find all the /jk/

str.match(/jk/g);//[ 'jk', 'jk', 'jk', 'jk' ] g is global



