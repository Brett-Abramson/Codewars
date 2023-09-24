# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

input = [1, -4, 7, 12]


def positive_sum(arr):
    positiveSum = 0
    for num in arr:
        if num > 0:
            positiveSum += num
    return positiveSum


print(positive_sum(input))

# not considered best practice but an example of pyhton list comprehension

def positive_sum(arr):
    return sum(x for x in arr if x > 0)

# x for x in arr : This is called a generator expression. It's a concise way to create an iterator that yeilds elements from the "arr". It goes through each element in "arr" one by one and temporaily assigns it to "x"

# This generator expression is used inside the sum function in your positive_sum function. It doesn't store multiple numbers in memory; it generates the numbers one by one as needed. It essentially encapsulates a loop over the elements of arr. When you call sum on it, it goes through the elements of arr one by one and calculates their sum without creating an intermediate list to store them.

# In summary, generators are memory-efficient because they generate values on-the-fly as you iterate over them, and they don't store the entire sequence of values in memory at once. Instead, they remember their state and can continue from where they left off.