# XState/fsm core tests

This folder contains core tests as provided by the XState/fsm package.
See <https://github.com/statelyai/xstate/blob/main/packages/xstate-fsm/test/fsm.test.ts>

These tests have been transpiled from the TypeScript source to JavaScript

## how test was setup and executed

Copy xstate-fsm unit test from XState and setup core test that can be used in Node.
(Subsequent tests to be setup to test changes in Espruino)

working with https://github.com/statelyai/xstate/tree/main/packages/xstate-fsm/test

* transpile fsm.test.ts to .js using tsc in a temp fork of XState.
* copy fsm.test.ts/js to this folder
* setup jest https://jestjs.io/ with a config 
* run with > jest fsm.test.js
* See image fsm_test_baseline.PNG for expected test output