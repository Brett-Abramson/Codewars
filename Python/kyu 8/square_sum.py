# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9

input = [1, 2, 2]


def square_sum(numbers):
    result = 0
    for num in numbers:
        result += num**2
    return result


print(square_sum(input))

# MORE PYTHONIC REFACTOR


def square_sum(numbers):
    return sum(num ** 2 for num in numbers)
