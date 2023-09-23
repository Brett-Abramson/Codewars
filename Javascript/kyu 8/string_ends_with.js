function solution(str, ending){
    return (ending.length===0) ? true : (()=> {
        const endOfString = str.substr(-(ending.length))
        return endOfString===ending
    })();
  }

  console.log(solution("abc",""))
  