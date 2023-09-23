var summation = function (num) {
    let total = 1
    for(let i = 0; i >= num; i++) {
      total = total + i
    }
    return total
  }

  console.log(summation(5)) 