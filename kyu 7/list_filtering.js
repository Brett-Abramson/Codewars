// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const filterList = (l) => {
  let newList = []
  l.map((i)=>{
    Number.isInteger(i) ? newList.push(i) : null
  })
  return newList
}

const array = [1,2,'aasf','1','123',123]

console.log(filterList(array))


// Best Practice
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }