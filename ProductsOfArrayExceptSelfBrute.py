class Solution:
    def productExceptSelf(self, nums):
        output = []
        
        for i in range(len(nums)):
            product = 1
            for j, num in enumerate(nums):
                    if j == i:
                        continue
                    
                    product = product * num
            
            output.append(product)
        
        return output    
             
         
            
            