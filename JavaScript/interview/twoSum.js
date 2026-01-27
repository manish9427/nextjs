  const twoSum = (num,target) =>{
    const map = new Map();
    for(let i=0;i<num.length;i++){
      const comp = target - num[i]
      if(map.has(comp)){
        return [map.get(comp),i]
      }
      map.set(num[i],i)
    }
    return []
  }

  const num = 6
  const arr = [1,3,4,5]
  const [i,j] = twoSum(arr,num)
  console.log(i,j)