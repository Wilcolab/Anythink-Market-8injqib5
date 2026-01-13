// Chain prompt steps:
// 1. Validate input
// 2. Normalize string
// 3. Convert to kebab-case

function toKebabCase(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  return input
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_\s]+/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .join('-');
}
