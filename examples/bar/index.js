import * as bar from '@wuxh/learn-pkg-pr-new-bar';

const result = {}
Object.entries(bar).forEach(([key, value]) => {
  if (typeof value === 'function') {
    result[key] = value();
  }
});

globalThis.console.table(result);
