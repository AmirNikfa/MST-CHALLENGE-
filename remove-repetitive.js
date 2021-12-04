export default function removerRepetitive(string) {
    let currentChar = "";
    let result = "";

    for (const character of string) {
        if (currentChar !== character) {
            currentChar = character;

            result += currentChar;
        }
    }

    return result;
}
