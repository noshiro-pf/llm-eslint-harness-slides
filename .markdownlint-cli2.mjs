const config = {
  globs: [
    '**/*.md',
    '!node_modules',
    '!dist/**/*',
    '!docs/**/*',
    '!agents/**/*',
    '!CHANGELOG.md',
  ],
  prettier: true,
  fix: true,

  /** @type {import("markdownlint").Configuration} */
  config: {
    default: true,
    'line-length': false, // prefer Prettier's setting
    'list-indent': false, // prefer Prettier's setting
    'code-block-style': false, // prefer Prettier's setting
    'first-line-h1': false,
    'first-line-heading': false,
    'ol-prefix': false,
    indentation: false, // prefer Prettier's setting
    'ul-indent': false, // prefer Prettier's setting
    'ol-indent': false, // prefer Prettier's setting
    'list-marker-space': false, // prefer Prettier's setting
    'no-duplicate-heading': { siblings_only: true },
    "no-inline-html": false, // allow HTML for links and formatting
    "single-title/single-h1": false, // allow multiple top-level headings in the same document
  },
};

export default config;
