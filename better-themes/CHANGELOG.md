# better-themes

## 1.1.1

### Patch Changes

- [#108](https://github.com/SaviruFr/better-themes/pull/108) [`f7040f3`](https://github.com/SaviruFr/better-themes/commit/f7040f3fc6eaed7637fd8ea1b114f1ba2bed69f5) Thanks [@SaviruFr](https://github.com/SaviruFr)! - Render the theme script only during SSR to avoid React's client-side script warning during StrictMode remounts. Thanks @himself65 for the report and suggested fix.

## 1.1.0

### Minor Changes

- [`1634183`](https://github.com/SaviruFr/better-themes/commit/16341837570899ba4062ca78807aee37686bb888) Thanks [@SaviruFr](https://github.com/SaviruFr)! - Add sessionStorage support. The new `storage` prop allows choosing between `localStorage` (default) and `sessionStorage`.
