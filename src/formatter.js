export function formatCount(count) {
    if (count === 0) {
        return "No words";
    } else if (count === 1) {
        return "$(pencil) 1 word";
    } else {
        return `$(pencil) ${count} words`;
    }
}
