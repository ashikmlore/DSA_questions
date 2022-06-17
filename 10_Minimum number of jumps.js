let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
let minJump = (arr) =>
{
  let index = 0
  let count = 0
  let element = arr[index]
  while(index < arr.length -1 )
  {
        index = index + element
        console.log(index)
        element = arr[index]
        count ++
        
  }
  return count

}
let res = minJump(arr)
console.log(res)

