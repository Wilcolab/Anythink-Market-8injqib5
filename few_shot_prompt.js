// Prompt with examples:
// "hello world" -> "helloWorld"
// "make it work" -> "makeItWork"

function toCamelCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}
