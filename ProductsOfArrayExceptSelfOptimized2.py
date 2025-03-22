
class Solution:
    def productExceptSelf(self, nums):
        output = []
        prefix = []
        suffix = []
        prefixProduct = 1
        suffixProduct = 1
        for i in range(len(nums)):
            prefix.append(prefixProduct)
            suffix.insert(0, suffixProduct)
            
            prefixProduct = prefixProduct * nums[i]
            suffixProduct = suffixProduct * nums[len(nums) - 1 - i]
        
        for i in range(len(nums)):
            output.append(prefix[i] * suffix [i])
                            
        return output  