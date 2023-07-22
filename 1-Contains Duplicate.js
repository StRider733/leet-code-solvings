//example 
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// :D solve

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // Step 1: Convert the integer array into a Set
    const uniqueNums = new Set(nums);
    
    // Step 2: Check if there are any duplicates
    // Step 3: Return true if duplicates exist, otherwise return false
    return uniqueNums.size < nums.length;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

/*output
1- true
2- false
3- true
*/

/*explanation

fonksiyon içine "uniqueNums" adlı bir değişken tanımladık---
bu değişken burada da "Set" ile tekrarlayan veriler varsa silip bir array içine atadık buna da "nums" dedik---
daha sonra return kısmında eğer "uniqueNums" içindeki sayılar verilen arrayden küçükse demek ki tekrarlayan bir sayı var ve atılmış dmeektir. böylece sonuç TRUE çıkar
eğer eşit çıkarsa demek ki tekrarlayan yok ve her sayı eşşiz demektir. sonuç FALSE çıkar.



*/



