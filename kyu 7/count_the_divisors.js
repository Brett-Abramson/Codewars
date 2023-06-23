// Count the number of divisors of a positive integer n.

// const getDivisorsCount = (n) => {
//     let divisorsCount = 0
//     for (let i = 1; i <= n; i++) {
//         n % i === 0 ? 
//         divisorsCount++
//         : null
//     }
//     return divisorsCount
// }

// In the original code, the loop iterates from i = 1 to i <= n to check for divisors. However, we can optimize this process by recognizing that divisors of a number always come in pairs.

// Consider a number n and its divisors. For any divisor d of n, there is always a corresponding divisor n/d (except when d equals n). For example, the divisors of 12 are: 1, 2, 3, 4, 6, and 12. Notice that the divisors come in pairs: (1, 12), (2, 6), and (3, 4).

// To find all the divisors, we only need to iterate up to the square root of n. This is because if d is a divisor of n, then n/d is also a divisor. The largest possible value for d is when d is equal to the square root of n. Beyond that point, the pairs of divisors start repeating.

// For example, let's consider the number 16. The square root of 16 is 4. If we iterate from 1 to 4, we find the divisors (1, 16) and (2, 8). If we continue iterating beyond 4, we would find the same pairs in reverse order: (8, 2) and (16, 1).

// By limiting the loop to iterate until i <= Math.sqrt(n), we cover all possible divisors of n without checking redundant pairs. This optimization reduces the number of iterations and significantly improves the efficiency of the function, especially for large numbers.

// I hope this explanation clarifies why we use the square root in the refactored code.
const getDivisorsCount = (n) => {
    let divisorsCount = 0;
    // 
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisorsCount++;
            if (n / i !== i) {
                divisorsCount++;
            }
        }
    }
    return divisorsCount;
}


console.log(getDivisorsCount(100))