let arr = [1,2,3,4,5]
let rotate = 2
let cycleRotate =(arr,rotate)=>
{
    for(let i = 0 ; i < rotate ; i ++)
    {
    arr.push(arr.shift())
    }
    return arr
}
let res = cycleRotate(arr, rotate)
console.log(res) 
