# Write a function that returns a string in which firstname is swapped with last name.

# Example(Input --> Output)

# "john McClane" --> "McClane john"

def name_shuffler(str_):
  list = str_.split(" ")
  reverseList = str(list[1]) + " " + str(list[0])
  return reverseList

print(name_shuffler("Mo Salah"))

# CLEANER + BETTER PRACTICE
def name_shuffler(str_):
    [first, last] = str_.split()
    return last + " " + first