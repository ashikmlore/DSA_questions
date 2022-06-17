//quick_sort
let arr = [2,1,0,0,1,2,0]
let swap = (array, i, j) =>
{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}


let pivotHelper = (arr, start = 0 , end = arr.length + 1)=>
{
    let pivot = arr[start]
    let swapIndex = start
    for(let i = start + 1 ; i < arr.length ; i ++)
    {
        if(pivot > arr[i])
        {
            swapIndex ++
            swap(arr, swapIndex, i)
        }
    } 
    swap(arr, start, swapIndex)
    return swapIndex

}

let quickSort = (arr, left = 0, right = arr.length - 1) =>
{
    if(left < right)
    {
        let pivotIndex = pivotHelper(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr

}

let res = quickSort(arr)
console.log(res)