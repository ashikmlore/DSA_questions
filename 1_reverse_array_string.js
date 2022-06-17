let arr = [4,5,8,2,8,0]

// let reverseString = (arr) =>
// {
//     let rev = []
//     for(let i = arr.length -1 ; i >=0 ; i -- )
//     {
//         rev.push(arr[i])
//     }
//     return rev
// }
// const revString = reverseString(arr)
// console.log(revString)


let reverseString = (arr) =>
{
    let rev = []
    let start = 0
    let end = arr.length - 1
    while(start < end)
    {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start ++
        end --
        console.log('hi')
    }
    return arr
}
const revString = reverseString(arr)
console.log(revString)