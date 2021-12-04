export default function isBalance(input) {
    const openingCharacter = ["[", "{", "("];
    let chStack = [];

    for (const character of input) {
        if (openingCharacter.includes(character)) {
            chStack.push(character);
        }

        if (chStack.length == 0) {
            return false;
        }

        let checker;
        switch (character) {
            case "]":
                checker = chStack.pop();
                if (["(", "{"].includes(checker)) {
                    return false;
                }
                break;
            case "}":
                checker = chStack.pop();
                if (["(", "["].includes(checker)) {
                    return false;
                }
                break;
            case ")":
                checker = chStack.pop();
                if (["{", "["].includes(checker)) {
                    return false;
                }
                break;
        }
    }

    if (chStack.length === 0) {
        return true;
    }
}
