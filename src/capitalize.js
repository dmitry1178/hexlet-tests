import _ from 'lodash';

// export const capitalize = (text) => {
//   if (text === '') {
//     return '';
//   }
//   const firstChar = text[0].toUpperCase();
//   const restSubstring = text.slice(1);
//   return `${firstChar}${restSubstring}`;
// };


export const capitalize = (text) => {
  const [firstSymbol = '', ...restSymbols] = text;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 3, 6, 8, 9];
// console.log(_.intersection(array1, array2));