/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index 
 * 
 * Start by requesting the hash then request the block and use console.log()
 * 
 */
function getBlock(index) {
		//add your code here
		be.blockIndex(index)
		.then(hash => {
			hash = JSON.parse(hash).blockHash
			be.block(hash)
				.then( block => {
					console.log(JSON.parse(block))
				})
				.catch( err => {
					console.log(err)
				})
		})
		.catch(err => {
			console.log(err)
		})
}

/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop (i) {
	setTimeout(function () {
        getBlock(i);
        i++;
		if (i < 3) theLoop(i);
	}, 4000);
  })(0);