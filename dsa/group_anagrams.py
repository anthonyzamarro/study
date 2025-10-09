from collections import defaultdict

class Solution:
    def group_anagrams(self, strs):
        anagram_map = defaultdict(list)
        result = []

        for s in strs:
            sorted_s = tuple(sorted(s))
            anagram_map[sorted_s].append(s)
        
        for value in anagram_map.values():
            result.append(value)

print(Solution.group_anagrams(1, ["eat", "tea", "tan", "ate", "nat", "bat"]))