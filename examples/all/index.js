import { add } from '@wuxh/learn-pkg-pr-new';
import { add5 } from '@wuxh/learn-pkg-pr-new-foo';
import { print5 } from '@wuxh/learn-pkg-pr-new-bar';

// ==== internal ====
const _flag = Symbol('internal');
globalThis[_flag] = 0;
function _printLine() {
  if (globalThis[_flag]++ >= 1) globalThis.console.log()
  globalThis.console.log('-'.repeat(process?.stdout?.columns ?? 20)); // ---
}
// ==== internal ====


// ==== main ====
_printLine();
print5();


_printLine();
globalThis.console.log({
  add,
  add5,
});

_printLine();
globalThis.console.table({
  '1+2=?': add(1, 2),
  [`${(globalThis.__ = Math.random())}=>add5`]: add5(globalThis.__),
});
