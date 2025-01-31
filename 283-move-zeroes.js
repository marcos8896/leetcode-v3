/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length;
  let i = 0;
  let processedItems = 0;
  while(processedItems < len) {
      if (nums[i] === 0) {
          const [removedItem] = nums.splice(i, 1);
          nums.push(removedItem);
          processedItems++;
          continue;
      }
      i++;
      processedItems++;
  }
}

/**
 * Reference for explanation:
 * https://github.com/AlgoMaster-io/leetcode-solutions/blob/main/javascript/move-zeroes.md
 */