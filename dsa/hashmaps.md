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
 ```python
 from collections import defaultdict
 class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]];
        anagram_map = defaultdict(list)
        result = []

        for s in strs:
            sorted_s = tuple(sorted(s))
            anagram_map[sorted_s].append(s)

        for value in anagram_map.values():
            result.append(value)

        return result

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
 ```
