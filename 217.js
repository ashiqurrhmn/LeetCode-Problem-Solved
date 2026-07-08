var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};

console.log(containsDuplicate([1,2,3,4,5,2,3,4,5,7,1]));