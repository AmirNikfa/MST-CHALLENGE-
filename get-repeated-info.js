export default function getRepeatedInfo(number) {
    let result = {};

    const numStr = number.toString();

    for(const digit of numStr) {
        if(!result[digit]) {
           result[digit] = "";  
        } 

        for(let i = 0; i < digit; i++) {
            result[digit] += digit;
        }
    }

    return result;
}

