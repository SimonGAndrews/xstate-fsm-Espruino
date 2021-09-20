const createMachine = require('xstate-fsm').createMachine;
const interpret = require('xstate-fsm').interpret;
const assign = require('xstate-fsm').assign;

// define led configuration (pins etc.)
const greenLed = 25;
const yellowLed = 26;
const redLed = 27;
const on = 1;
const off = 0;
const allOff = () => {for (let i= 25; i<28; i++ ) {digitalWrite(i,0);}};

// configure button on an input pin
const buttonPin = 11;
pinMode(buttonPin, 'input_pulldown');

// define state machine
const lightMachine = createMachine({
  id: 'light',
  initial: 'green',
  context: { redLights: 0 },
  states: {
    green: {
        entry: [ () => digitalWrite(greenLed,on)],
        exit: [ () => digitalWrite(greenLed,off)],
      on: {
        BUTTON: 'yellow'
      }
    },
    yellow: {
        entry: [ () => digitalWrite(yellowLed,on)],
        exit: [ () => digitalWrite(yellowLed,off)],
      on: {
        BUTTON: {
          target: 'red',
          actions: () => console.log('Going to red!')
        }
      }
    },
    red: {
        entry: [
          assign({ redLights: (ctx) => ctx.redLights + 1 }),
          () => digitalWrite(redLed,on)
        ],
        exit: [ allOff ],
      on: {
        BUTTON: 'green'
      }
    }
  }
});

// setup the machine interpreter
const lightService = interpret(lightMachine);

lightService.subscribe((state) => {
  console.log('At state: ' + state.value + ' with context:');
  console.log(state.context);
  console.log('press button to send BUTTON event');
  console.log(' ');
});

// run the state machine
lightService.start();

// Send a BUTTON event on the raising edge of a button press 
setWatch( 'lightService.send("BUTTON")',buttonPin,{repeat:true, edge:1});