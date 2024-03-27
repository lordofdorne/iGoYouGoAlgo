# Given a string s which represents an expression, evaluate this expression and return its value. 

# The integer division should truncate toward zero.

# You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

# Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

class Solution:
    def calculate(self, s: str) -> int:
        sign = '+'
        num = 0
        s += '+'
        stack = []

        for char in s:
            if char.isdigit():
                num = num * 10 + int(char)
            elif char == ' ':
                continue
            else:
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    operant = stack.pop()
                    stack.append((operant * num))
                elif sign == '/':
                    operant = stack.pop()
                    stack.append(int(operant / num))
                sign = char
                num = 0
        return sum(stack)
        