

# Convert a non-negative integer num to its English words representation.

 

# Example 1:

# Input: num = 123
# Output: "One Hundred Twenty Three"
# Example 2:

# Input: num = 12345
# Output: "Twelve Thousand Three Hundred Forty Five"
# Example 3:

# Input: num = 1234567
# Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

class Solution:
    def numberToWords(self, num: int) -> str:
        if not num: return 'Zero'
        ones = {1:' One', 2:' Two', 3:' Three', 4:' Four', 5:' Five', 6:' Six', 7:' Seven', 8:' Eight', 9:' Nine', 
                10:' Ten', 11:' Eleven', 12:' Twelve', 13:' Thirteen', 14:' Fourteen', 15:' Fifteen', 16:' Sixteen', 
                17:' Seventeen', 18:' Eighteen', 19:' Nineteen'}
        tens = {2:' Twenty', 3:' Thirty', 4:' Forty', 5:' Fifty', 6:' Sixty', 7:' Seventy', 8:' Eighty', 9:' Ninety'}
        
        self.output = ''
        def wordify(num):
            if num // 1000000000:
                wordify(num // 1000000000)
                self.output += ' Billion'
                wordify(num % 1000000000)
            elif num // 1000000:
                wordify(num // 1000000)
                self.output += ' Million'
                wordify(num % 1000000)
            elif num // 1000:
                wordify(num // 1000)
                self.output += ' Thousand'
                wordify(num % 1000)
            elif num // 100:
                wordify(num // 100)
                self.output += ' Hundred'
                wordify(num % 100)
            elif num // 10 - 1 > 0:
                self.output += tens[num // 10]
                wordify(num % 10)
            elif num:
                self.output += ones[num]
        wordify(num)
        return self.output[1:]