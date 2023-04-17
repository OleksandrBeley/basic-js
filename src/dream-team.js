const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(arr) {
  let newArr = arr.filter(item => typeof item == 'string');
  return newArr.map(item => item.toUpperCase().slice(0, 1)).sort((a, b) => a > b ? 1 : -1).join('');
}

module.exports = {
  createDreamTeam
};
