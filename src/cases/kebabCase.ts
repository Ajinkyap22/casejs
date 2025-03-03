/**
 * Converts a string to kebab-case.
 *
 * Examples:
 * "hello world" -> "hello-world"
 * "hello-world" -> "hello-world"
 * "HELLO_WORLD" -> "hello-world"
 *
 * @param input The input string.
 * @param options.preserveWhitespace When true, preserves leading/trailing whitespace.
 *                                  Internal whitespace is handled as per kebab-case rules.
 * @param options.preserveSpecialCharacters Whether to preserve special characters.
 * @returns The kebab-case version of the string.
 */
export function toKebabCase(
  input: string,
  options: {
    preserveWhitespace?: boolean;
    preserveSpecialCharacters?: boolean;
  } = {}
): string {
  if (!input.trim()) return input;

  const { preserveWhitespace, preserveSpecialCharacters } = options;

  if (preserveWhitespace && preserveSpecialCharacters) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)([^a-zA-Z0-9]+)(\s*)/g,
      (_, startSpace, words, endSpace, specialChar, afterSpace) => {
        const kebabCased = words
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/\s+/g, "-")
          .toLowerCase();
        return `${startSpace}${kebabCased}${endSpace}${specialChar}${afterSpace}`;
      }
    );

    const finalProcessed = processed.replace(
      /(\s*)([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*)(\s*)$/g,
      (_, startSpace, words, endSpace) => {
        const kebabCased = words
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/\s+/g, "-")
          .toLowerCase();
        return `${startSpace}${kebabCased}${endSpace}`;
      }
    );

    return `${leadingSpace}${finalProcessed}${trailingSpace}`;
  }

  if (preserveWhitespace) {
    const matches = input.match(/^(\s*)(.*?)(\s*)$/s);
    if (!matches) return input;

    const [, leadingSpace, content, trailingSpace] = matches;

    const processed = content
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .toLowerCase();

    return `${leadingSpace}${processed}${trailingSpace}`;
  }

  if (preserveSpecialCharacters) {
    const parts = input.split(/([^a-zA-Z0-9]+)/);

    return parts
      .map((part) => {
        if (!/[a-zA-Z0-9]/.test(part)) return part.replace(/\s+/g, "");

        return part
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]+/g, "-")
          .toLowerCase();
      })
      .join("");
  }

  return input
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}
