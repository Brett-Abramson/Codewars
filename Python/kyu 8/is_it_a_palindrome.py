# Write a function that checks if a given string (case insensitive) is a palindrome.

# A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

def is_palindrome(s):
    if(len(s) < 2): return True
    start = 0
    end = len(s) - 1
    s = s.casefold()

    for ltr in s:
        start += 1
        if (ltr != s[end]):
            return False
        if (start == int(len(s) / 2)):
            return True
        end -= 1


print(is_palindrome("Anna"))
