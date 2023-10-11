# Numbers ending with zeros are boring.

# They might be fun in your world, but not here.

# Get rid of them. Only the ending ones.

# 1450 -> 145
# 960000 -> 96
# 1050 -> 105
# -1050 -> -105
# Zero alone is fine, don't worry about it. Poor guy anyway


def no_boring_zeros(n):
    while(n % 10 == 0 and n != 0):
        n = n / 10

    return int(n)
        


print(no_boring_zeros(0))


# instead of the int(n) in the return can divide n using the floor division which returns an integer

def no_boring_zeros(n):
    while n % 10 and n != 0:
        n //= 10
    return n