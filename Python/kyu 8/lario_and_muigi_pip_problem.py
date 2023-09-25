# Issue
# Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

# The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

# The pipes are correct when each pipe after the first is 1 more than the previous one.

# Task
# Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

# Example
# Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


def pipe_fix(nums):
  min = nums[0]
  max = nums[len(nums) - 1]
  list = []

  print(max)
  x = min
  for x in range(min, max + 1):
    list.append(x)
    x += 1

  return list


print(pipe_fix([ 1,3,5,6,7,8]))



