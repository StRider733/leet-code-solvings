// example
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

*/

//solve :D

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* we use the 

split() method to convert the strings into arrays of characters
sort() method to sort the characters in each array alphabetically
join() method to convert the sorted arrays back to strings.

*/
var isAnagram = function(s, t) {
    // If the lengths of the two strings are different, they can't be anagrams so it will return FALSE.
    if (s.length !== t.length) {
        return false;
    }

    // Sort the characters in both strings and compare them
    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");

    return sortedS === sortedT;    

};