# Hashmaps

## Benefits
1. Custom keys are easier to work with
2. Allow for O(1), whereas arrays/linked lists are O(n)

## Hash function
- Takes in some data to assign to an index
- Collisions occur when a hash function tries to assign data to an already used index. The function
needs a way to reassign the data to a non-used index if this occurs.
- Keys must be immutable. Trying to use an array, for exampple, as a key, then you will get a type error called
unhashable type.

## Coding HashMaps

city_map = {}
cities = ['Vancouver', 'Calgary', 'Toronto']
city_map['Canada'] = []
city_map['Canada'] = += cities

Retrieving Data:
- hashmap.keys()
- hashmap.values()
- hashmap.items() # combination of .keys() and .values()

# Practice

## Group Anagrams

Letters are keys as sorted tuple and values are array of words containing those letters
`{ ('a', 'e', 't'): ["eat", "tea"] }`
 ```python
 from collections import defaultdict
 class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]];
        anagram_map = defaultdict(list)
        result = []

        for s in strs:
            # keys must be immutable, so tuple is used
            sorted_s = tuple(sorted(s))
            anagram_map[sorted_s].append(s)

        for value in anagram_map.values():
            result.append(value)

        return result

print(Solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
 ```


Store tuple of letter count across all letters as key and array of words as value
`{ (0,1,0...1,0,etc.): ["eat", "tea"] }`
```python
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):
        anagram_map = defaultdict(list)

        for s in strs:
            # Count frequency of each letter
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1

            # Use the count tuple as a key
            anagram_map[tuple(count)].append(s)


        return list(anagram_map.values())

# Test it
print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
 ```
