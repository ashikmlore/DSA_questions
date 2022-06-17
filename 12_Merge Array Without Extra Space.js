arr1 = [1, 3, 5, 7]
arr2 = [0, 2, 6, 8, 9]
//op = [0 1 2 3 5 6 7 8 9]



let swap = (array,i , j) =>
{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
let pivotHelper = (arr1, start = 0 , end = arr1.length +1)=>
{
    let pivot = arr1[start]
    let index = start
    for(let i = start + 1; i <arr1.length ; i ++)
    {
        if(pivot > arr1[i])
        {
        index ++
        swap(arr1, index, i)
        }
    }
    swap(arr1, start, index)
    return index

}

let quickSort = (arr1, left = 0, right = arr1.length - 1) =>
{
    if(left < right)
    {
    let pivotPoint = pivotHelper(arr1, left, right)
    //left
    quickSort(arr1, left, pivotPoint -1)
    //right
    quickSort(arr1, pivotPoint + 1, right)
    }
    return arr1
}

let MergeArray =(arr1, arr2) =>
{
    for(let i =0; i < arr2.length; i++ )
    {
       arr1.push(arr2[i]) 
    }
   let sorted =  quickSort(arr1)
    return sorted
}


let res = MergeArray(arr1, arr2)
console.log(res)