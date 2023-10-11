# Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

def take(arr, n):
    counter = 0
    result = []
    result_n = None

    if(len(arr) < n):
        result_n = len(arr)
    else:
        result_n = n

    while (counter < result_n):
        result.append(arr[counter])
        counter = counter + 1
  
    return result

# ChatGPT feedback
# Certainly! Your solution is correct, and it's great that you took the time to implement the function from scratch. Let's break down your solution and offer some feedback.

# Iterative approach: You used a loop to manually traverse the list and add items to the result. This is a solid approach for languages that don't provide higher-order functions or slicing, but Python has some built-in tools that make this simpler.

# Determining result_n: Your logic to find the minimum of len(arr) and n is correct. In Python, there's a built-in min function that can help you simplify this.

# Pythonic Solution: In Python, a more idiomatic way to accomplish the same thing would be using list slicing. Python's list slicing feature allows you to extract a subset of a list in a very concise manner.



# REFACTOR - Pythonic Approach

def take(arr, n):
    return arr[:n]

print(take([1,2,3,4,5], 2)) 