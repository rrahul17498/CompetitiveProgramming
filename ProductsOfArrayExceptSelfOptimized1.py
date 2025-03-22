
class Solution:
    def productExceptSelf(self, nums):
        output = []
        product = 1
        for i in range(len(nums)):
            if i == 0 or nums[i] == 0:
                product = 1
                for idx,num in enumerate(nums):
                    if idx == i:
                        continue
                        
                    product = product * num 
            else:
                product = int(product/nums[i]) * nums[i-1]
            
            output.append(product)
            
            
        return output  