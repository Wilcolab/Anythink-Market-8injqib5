// Refined prompt:
// Convert a string to camelCase with error handling and edge case support.

function toCamelCase(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  return input
    .trim()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
