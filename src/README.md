# Source files for xstate-fsm-Espruino

This folder contains the source code for a fork of the finite state machine, XState/fsm,
<https://github.com/statelyai/xstate/tree/main/packages/xstate-fsm>

with modifications necessary to run it as a module within the Espruino JavaScript Interpreter for Microcontrollers.

## Initial version

The initial forked version is @xstate/fsm@1.6.1
<https://github.com/statelyai/xstate/releases/tag/%40xstate%2Ffsm%401.6.1>
The original TypeScript files index.ts and types.ts are here as transpiled js , taken from the NPM install of @xstate/fsm.

## Modifications

Modifications have been applied to the initial version to enable it to execute in the Esprunio javascript engine.  This engine does not support all elements of the current javascript spec ,
See <https://www.espruino.com/Features>
hence the need to modify.  

The modifications are tracked as Github Issues and commits within this repository.

As per Issue #1 the resulting Esprunio module containing xstate/fsm is within xstate-fsm.js
