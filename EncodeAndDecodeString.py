class Solution:

    def encode(self, strs: List[str]) -> str:
        encodedString = ""
        for i, strVal in enumerate(strs):
            encodedString = encodedString + str(len(strVal)) + "#" + strVal

        return encodedString    


    def decode(self, s: str) -> List[str]:
        decodedStrings = []
        if len(s) > 0:
            numStart = 0
            wordStart = 0
            i = 0
            while i < len(s):
                if s[i] != "#":
                    i += 1
                    continue
                print(s[numStart:i])
                numOfChars = int(s[numStart:i])
                wordStart = i + 1
                numStart = wordStart + numOfChars
                decodedStrings.append(s[wordStart : numStart])
                i = numStart 
        
        return decodedStrings     

