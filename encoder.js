export default function encoder({ inputString, repeatCount }) {
    let str = inputString;
    let strlen = inputString.length;
    let encodedStr = str;

    for (let i = 0; i < repeatCount; i++) {
        let newStr;
        const lastChar = encodedStr[strlen - 1];

        // place last character of encoded message at first character of newStr and copy remaining characters in newStr
        newStr = lastChar;
        for (let j = 0; j < strlen - 1; j++) {
            newStr += encodedStr[j];
        }

        // place next letter for each character of newStr in encodedStr
        encodedStr = "";
        for (const character of newStr) {
            const nextCharacter =
                character === "z"
                    ? "a"
                    : String.fromCharCode(
                          character.charCodeAt(character.length - 1) + 1
                      );
            encodedStr += nextCharacter;
        }
    }

    return encodedStr;
}

