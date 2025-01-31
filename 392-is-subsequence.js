/**
 * https://leetcode.com/problems/is-subsequence/
 * My solution
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let indexS = 0;
    let indexT = 0;
    while(indexT < t.length && indexS < s.length) {
      if(t[indexT] === s[indexS]) {
        indexS++;
      }
      indexT++;
    }
    return indexS === s.length;
};

console.log(isSubsequence('abc', 'ahbgdddcx'));

/**
 * Explanation reference
 * https://github.com/AlgoMaster-io/leetcode-solutions/blob/main/javascript/is-subsequence.md
 */
