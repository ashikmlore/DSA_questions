let arr1 = [5,7,3,5,9,1]
let arr2 = [6,3,7,8,3,1]
let UnionArray = (arr1, arr2) =>
{
    let unionArray = []
    for(let i = 0 ; i < arr2.length ; i ++)
    {
        arr1.push(arr2[i])
    }
  
    let obj ={}
    for(let i of arr1)
    {
       obj[i] = (obj[i] || 0) + 1 
    }
    console.log(obj)
    for(let [key,value] of Object.entries(obj))
    {
        unionArray.push(key)
        
    }
    return unionArray
 

    
}
let union = UnionArray(arr1,arr2)
console.log(union)