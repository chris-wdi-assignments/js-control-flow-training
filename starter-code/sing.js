console.log("sing.js loaded");

let count = window.prompt('How many verses of my song would you like to hear?', '3');
// now typecast string returned by window.prompt to a number
count = +(count.trim());
console.log(typeof count);

let bottles = '', lyric = '';

for (; count >= 0; count--){
  if ( count === 1 ) {
    bottles = 'bottle';
  } else {
    bottles = 'bottles'
  }

  lyric = ( count || 'No more' )

  console.log(`${lyric} ${bottles} of beer on the wall,`);
  console.log(`${lyric} ${bottles} of beer!`);
  console.log('Take one down and pass it around,');
  console.log(`${lyric} ${bottles} of beer on the wall,`);
}
