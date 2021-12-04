export default function operations(ops) {
    const operations = ops.split(" ");
    const result = [];

    for (const operation of operations) {
        switch (true) {
            case operation === "D":
                result.push(result[result.length - 1] * 2);
                break;
            case operation === "R":
                result.pop();
                break;
            case operation === "+":
                result.push(
                    result[result.length - 1] + result[result.length - 2]
                );
                break;
            case !isNaN(operation):
                result.push(operation);
        }
    }

    return result;
}

