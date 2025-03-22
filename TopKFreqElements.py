class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        track = {}
        freq_elements = [[] for i in range(len(nums) + 1)]
        kfreq_elements = []

        for num in nums: 
            track[num] = track.get(num, 0) + 1

        for num, count in track.items():
            freq_elements[count].append(num) 
        
        for i in range(len(freq_elements) -1, 0, -1):
            for elem in freq_elements[i]:
                kfreq_elements.append(elem)
                if len(kfreq_elements) == k:
                    return kfreq_elements