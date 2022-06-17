let arr = [5,-8,-3,6,7,90,-90]

let swap = (array, i, j) =>
{
 let temp = array[i]
 array[i] = array[j]
 array[j] = temp
}
let pivotHelper = (arr,start = 0, end = arr.length + 1 ) =>
{
    let pivot = arr[start]
    let index = start
    for(let i = start + 1; i < arr.length; i++)
    {
        if(pivot > arr[i])
        {
            index ++
            swap(arr, index, i)
        }
    }
    swap(arr, start, index)
    return index
}

let quicksort = (arr, left = 0 , right = arr.length - 1 ) =>
{
    if(left < right)
    {
        pivotIndex = pivotHelper(arr, left, right)
        {
            //left
            quicksort(arr, left, pivotIndex - 1)

            //right
            quicksort(arr, pivotIndex + 1, right )
        } 
    }
    return arr

}
let res = quicksort(arr)
console.log(res)