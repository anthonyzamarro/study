/**
 * Return indices of two numbers that add up to target
 * 
 * Use a Hashmap to store the numbers needed as key and their indices as value.
 * If the number needed exists in the hashmap, return the index in an array
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
function twoSum(nums, target) {
    let hashMap = {}

    for(let i = 0; i .lengt<h;  i++) {
        const diff = target - nums[i]
        if (hashMap[diff] !== undefined) {
            return [i, hashMap[diff]]
        }
        hashMap[nums[i]] = i
    }
}