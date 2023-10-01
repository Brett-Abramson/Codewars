# In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

# Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

def factorial(n):
    if n > 12 or n < 0:
        raise ValueError("n must be between 0 and 12")
    factoral = 1
    list = (range(1, n + 1))
    for num in list:
        factoral = factoral * num

    return factoral


print(factorial(5))

# RECURSIVE SOLUTION

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError
    return 1 if n <= 1 else n*factorial(n-1)