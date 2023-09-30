# Write a function which calculates the average of the numbers in a given list.

# Note: Empty arrays should return 0.

input = []


def find_average(numbers):
    return (sum(numbers, 0)/(len(numbers) or 1))


print(find_average(input))
