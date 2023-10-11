# Story
# Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

# Task
# Your mission:
# Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

# A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

import datetime


def check_coupon(entered_code, correct_code, current_date, expiration_date):
  if entered_code != correct_code:
    return False
  
  date1 = datetime.datetime.strptime(current_date, "%B %d, %Y")
  date2 = datetime.datetime.strptime(expiration_date, "%B %d, %Y")
  print(f"Parsed Dates: {date1}, {date2}")
  if date1 <= date2:
    return True
  else: 
    print (entered_code, current_date, current_date, expiration_date)
    return False
    

# WTF MATE

def check_coupon(entered_code, correct_code, current_date, expiration_date):
  if entered_code != correct_code:
    return False
  
  # Helper function to convert month name to a number (1 - 12)
  def month_to_number(month):
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months.index(month) + 1
  
  # Helper function to parse a date string into its components
  def parse_date(date_string):
    month, day_year = date_string.split(" ",1)
    day, year = day_year.split(", ")
    return (int(year), month_to_number(month), int(day))
  
  # Parse the dates
  current_date_components = parse_date(current_date)
  expiration_date_components = parse_date(expiration_date)

  # Compare the dates
  return current_date_components <= expiration_date_components
  
# Why this is a shitty kata

# Ah, the issue you're facing is related to the difference between "reference equality" and "value equality" in Python, particularly for strings.

# In Python, there's a process called "string interning." This means that Python tries to use a single reference for string values that are the same. This is particularly true for string literals in the code (like "hello") and some other commonly used strings.

# For instance, if you have:
a = "hello"
b = "hello"
print(a is b)  # This checks reference equality, and it will print True
# However, when you generate a string dynamically, for example, by reading it from a file or constructing it, it may not always be interned:

a = "hello"
b = "".join(["h", "e", "l", "l", "o"])
print(a is b)  # This checks reference equality, and it will print False
print(a == b)  # This checks value equality, and it will print True
# The error message you've provided suggests that the tests are using the is operator (or something equivalent) to compare entered_code to correct_code, which is looking for reference equality. This means the test might fail even if the two strings have the same value, simply because they're not the same object in memory.

# Your code is correct in using != to compare the strings by value. It's a problem with the test setup or validation.

# To fix this from the testing side, whoever set up the tests should be using == (value comparison) instead of is (reference comparison) to compare strings. If this is not a deliberate decision on their part, it's a mistake in the test setup.

# To reiterate: Your logic for string comparison in the function is correct. It's the testing setup that's flawed. If you're on a platform like Codewars, LeetCode, etc., you might want to provide feedback or report the issue. If it's a classroom assignment or a work task, discuss the problem with the instructor or the person who gave you the task.