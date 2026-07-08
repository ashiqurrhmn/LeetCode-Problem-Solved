var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

const nums = [0, 0, 1, 1, 2, 2, 3, 3, 5, 5];

const k = removeDuplicates(nums);

console.log(k);                 // Number of unique elements
console.log(nums);              // Entire modified array
console.log(nums.slice(0, k));  // Only the unique elements