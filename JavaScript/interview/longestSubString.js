const s = "abcabcbb"

const fun = (s) =>{
    const set = new Set();
    let left = 0;
    let maxLength = 0;
    
    for(let right=0;right<s.length;right++){
        if(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength,right-left+1);
    }
    return maxLength;
}

const ans = fun(s)
console.log(ans);