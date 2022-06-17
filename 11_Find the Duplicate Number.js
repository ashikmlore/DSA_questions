let arr = [3,1,3,4,2]
let FindDuplicate =(arr) =>
{
    let counter = {}
    for(let i of arr)
    {
        counter[i] = (counter[i] || 0) + 1 
    }
    for(let [key,value] of Object.entries(counter))
    {
        if(value > 1)
        {
            return key
        }
    }
}
let res = FindDuplicate(arr)
console.log(res)