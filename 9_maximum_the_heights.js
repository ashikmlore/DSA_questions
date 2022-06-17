//Minimize the Heights
arr = [2, 9, 8, 3]
k = 2
let maxHeight = (arr,k) =>
{
    let n = arr.length -1 
   //sort the array [2,3,8,9] 
   arr.sort()
   //console.log(arr)
   let diff = arr[0] + arr[n]
  // console.log(diff)
   for(let i = 1 ; i < n ; i ++)
   {
        if(arr[i] - k ==0)
        {
            continue
        }
        let max = Math.max(arr[i - 1]+k, arr[n]-k)
        let min = Math.min(arr[i + 1] - k, arr[0]+k)
        diff = Math.min(diff, max - min)
   }
   return diff
} 
let res = maxHeight(arr,k)
console.log(res)


