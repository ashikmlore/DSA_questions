let arr = [56,1111,9,6]
let min_max = (arr) => {
    let min = arr[0]
    let max = arr[arr.length - 1]
    for(let i = 1 ;i < arr.length - 1; i ++)
    {
        if(arr[i] < min)
        {
            min  = arr[i]
        }

    }
    for(let i = arr.length  ; i >=0 ; i --)
    {
        if(arr[i] > max)
        {
            max  = arr[i]
        }
    }
    return [min,max]


}
const minMax = min_max(arr)
console.log(minMax)