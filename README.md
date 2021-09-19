# xstate-fsm-Espruino

This repro contains a fork of the finite state machine (FSM), XState/fsm, with modifications necessary to run it as a module within the Espruino JavaScript Interpreter for Microcontrollers

*( This repro is currently Work in Progress)*

**This software should be considered as experimental.**  
As such this software should be used for amusement only and specifically not be used for any mission critical or safety/health systems.    As per the license below this work is provided without warranty of any kind.  

Note: this module enables the XState package Xstate/fsm which is Not the full XState Library for the support of statecharts.  see <https://xstate.js.org/docs/packages/xstate-fsm/#features>
for a list of supported features of the Xstate/fsm.  

## Goals

The goal of this software is to enable the advantages of a finite state machine approach to be demonstrated for the programming of Internet of Things (IOT) microcontrollers.  In a way that:

* Supports JavaScript as a mid-level scripting environment for the programming of IOT devices.
* Enables the existing diverse Esprunio module device library of sensors, actuators and other interface components to be incorporated into IOT devices driven by a FSM.
* Builds on resources available within the established open source communities of both XState and Esprunio.
* Optimises the overall system capabilities within the constraints of low-spec microcontroller devices available for IOT.  
* is tested on a sample of low-end, connected, IOT microcontroller devices available today eg Esprunio and Espressif ESP32.  (noting that full XState Statechart Library is already enabled on the Raspberry Pi, running under Linux with Node.js)

## Implementation 
xstate-fsm-Espruino can be run in Esprunio on a microcontroller board by installing it as an Espruino module on the board. The module code file, xstate-fsm.js  is available in this repository in the src folder.

See the link working with modules below for full details on working with modules in Esprunio.

In summary, to implement, assuming you are using the Espruino IDE and are connected to a board.  <https://www.espruino.com/Quick+Start+BLE#using-the-espruino-ide>

Download the module code to your local machine from this repository. 
<https://github.com/SimonGAndrews/xstate-fsm-Espruino/src/xstate-fsm.js>

Within the IDE click the Device Storage Icon.

![](./docs/Espruino_storage.png)

in the file open pop-up, navigate to the local copy of xstate-fsm.js.  Click open.  Then in the 'Upload A file' pop-up enter the filename as xstate-fsm  (WITHOUT any extension).
![](./docs/Espruino_upload.png)

Click OK, the IDE will upload the file to the board, and it will be available in the boards non-volatile storage as an Espruino module.

![](./docs/Espruino_xstate-fsm_inStorage.png).

The module can then be accessed with require statements as below.

![](./docs/Espruino_uploadMachine.png)

(To Do - link to examples)

## References

* Documentation for XState: <https://xstate.js.org/docs/>  (including FSM concepts)
* Documentation for XState/fsm: <https://xstate.js.org/docs/packages/xstate-fsm/#features>
  and <https://github.com/statelyai/xstate/tree/main/packages/xstate-fsm>

* Espruino:  <https://www.espruino.com/>  and <https://github.com/espruino>
* Esprunio Working with Modules: <https://www.espruino.com/Modules>
* Esprunio Index of modules (Devices etc) <http://www.espruino.com/modules/>

## Credits

Both XState and Esprunio are Open Source projects.

Esprunio is the product of Gordon Williams <https://en.wikipedia.org/wiki/Espruino>.  
To support the Esprunio project please see: <https://www.espruino.com/Donate>

XState is the product of David Khourshid and the XState community.  
To support the XState project please see: <https://opencollective.com/xstate>

## License

XState/fsm is Copyright (c) 2015 David Khourshid and utilised here under its MIT license
<https://github.com/statelyai/xstate/blob/main/packages/xstate-fsm/LICENSE>

The modifications to Xstate/fsm provided here are Copyright (c) 2021 Simon Andrews and are provided for use under MIT License. <https://github.com/SimonGAndrews/xstate-fsm-Espruino/blob/main/LICENSE>
