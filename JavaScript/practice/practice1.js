const fun = (a) => {
    const ans = [];
    a.forEach(item =>{
        ans.push(item*6)
    } )
    console.log(ans)
    
    let freq = {}
    
    for(let num of a){
        freq[num] = (freq[num]||0)+1;
    }
    console.log(freq)
    
    let dup = [];
    
    for(let key in freq){
        if(freq[key]>1){
            dup.push(Number(key))
        }
    }
    
    console.log(dup)
    
    const so = dup.sort((a,b) => b-a)
    console.log(so)
    
    
}
let a= [1,2,3,4,5,1,2,4]
fun(a)

