# Your task is to find the first element of an array that is not consecutive.

# By not consecutive we mean not exactly 1 larger than the previous element of the array.

# E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

# If the whole array is consecutive then return null2.

# The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

# If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

# 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

input = [1,2,3,4,6,7,8]

def first_non_consecutive(arr):
  if len(arr) == 1 or len(arr) == 0: return None
  lastNum = arr[0] - 1
  for x in arr:
    if x == (lastNum + 1):
      lastNum = x
      continue
    else:
      return x
  return None

print(first_non_consecutive(input))

# REFACTORED SOLUTION
def first_non_consecutive(arr):
  if len(arr) < 2:
    return None
  
  for i in range(1, len(arr)):
    if arr[i] != arr[i-1] + 1:
      return arr[i]
  return None

# In this solution:

# We use a for loop with range(1, len(arr)) to iterate through the elements of the array starting from the second element (index 1) because we are comparing each element with the previous one.

# Inside the loop, we check if the current element arr[i] is not equal to the previous element arr[i-1] + 1. If they are not equal, it means we have found the first non-consecutive element, and we return it.

# If the loop completes without finding a non-consecutive element, we return None.

# This alternative solution eliminates the need for an external variable (lastNum) and simplifies the logic slightly. It's also more in line with typical Python coding style. Both solutions are correct, so you can choose the one that you find more readable and comfortable to work with.