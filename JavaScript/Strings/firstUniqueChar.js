const firstUniqueChar = (str) => {
    const countMap = {};

    // for (let char of str) {
    //     countMap[char] = (countMap[char] || 0) + 1;
    // }

    // for(let char of str){
    //     if(!countMap[char]){
    //         countMap[char]=1;
    //     }else{
    //         countMap[char] = countMap[char] + 1;
    //     }
    // }

    for(let char of str){
        if(countMap[char]){
            countMap[char]++;
        }else{
            countMap[char] = 1;
        }
    }

    for (let char of str) {
        if (countMap[char] === 1) {
            return char;
        }
    }

    return null;
};

console.log(firstUniqueChar("swiss"));
