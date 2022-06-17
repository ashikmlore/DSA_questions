// QUICK SORT
//Pivot HELPER FUNCTION

let arr = [4,6,1,8,3,90]
let k = 4

const swap = (array,i,j) =>
{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const PivotHelper = (arr, start = 0 , end = arr.length + 1) =>
{
//let start = 0
let pivot = arr[start]
let swapIndex = start
for(let i = start + 1 ; i < arr.length ; i ++)
{
    if(pivot > arr[i])
    {
        swapIndex ++
        swap(arr,swapIndex,i)
    }
}
swap(arr,start,swapIndex)
//return arr
return swapIndex
}

//quickSort

let quickSort = (arr,left = 0, right = arr.length - 1) =>
{
    if(left < right)
    {
        let pivotIndex = PivotHelper(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1 )

        //right
        quickSort(arr, pivotIndex + 1, right)

    }
    return arr
}

let kthElement = (arr,k) =>
{
   let element= quickSort(arr)
    return element[k-1]
}

const PH = kthElement(arr,k)
console.log(PH)


