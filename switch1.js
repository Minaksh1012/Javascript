// const ex='papaya';
// switch(ex){
//     case 'oranges':
//         console.log('oranges are $0.59 a pound')
//         break
//     case 'mangoes':
//         console.log('mangoes')
//         break
//     case 'papaya':
//         console.log("mangoes and papya 42.59 a pound")
//         break 
//     default:
//         console.log('sorry we are out of stock')               
// }


var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

