// Link - https://leetcode.com/problems/two-sum/
// Brute Force method - O(n^2)
const twoSum = (nums: number[], target: number): number[] => {

    for(let i=0;i<nums.length;i++) {
        const otherElem = target - nums[i];
        for (let j=i+1;j<nums.length;j++) {
            if (nums[j] == otherElem) {
                return [i,j];
            }
        }

    }

    return [];
};

// Optimized method - O(n)
function twoSumOptimized(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    for(let i=0;i<nums.length;i++) {
        const pairNum = target - nums[i];
        if (numMap.has(pairNum)) {
            return [numMap.get(pairNum)!, i];
        }
        numMap.set(nums[i], i);
    }

    return [];
};


// Two Sum with duplicates
function twoSumWithDuplicates(nums: number[], target: number): Array<[number, number]>{
    const numsHistory = new Map();
    const result: Array<[number, number]> = [];
    
    for(let i=0;i<nums.length;i++){
        const complement = target - nums[i];
        if(numsHistory.has(complement)) {
            for(let index of numsHistory.get(complement)) {
                result.push([index, i]);
            }
        }
        
        const existingIndices = numsHistory.get(nums[i]) || [];
        numsHistory.set(nums[i], [...existingIndices,i]);
    }
    
    return result;
}; 