export function formatCount(count) {
  switch (count) {
    case 0:
      return "No words";

    case 1:
      return "$(pencil) 1 word";

    default:
      return `$(pencil) ${count} words`;
  }
}
