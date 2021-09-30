const createMachine = require('xstate-fsm').createMachine;
const interpret = require('xstate-fsm').interpret;
const assign = require('xstate-fsm').assign;

const greenLed = 25;
const yellowLed = 26;
const redLed = 27;
const on = 1;
const off = 0;

const allOff = () => {for (let i= 25; i<28; i++ ) {digitalWrite(i,0);}};

const lightMachine = createMachine({
  id: 'light',
  initial: 'green',
  context: { redLights: 0 },
  states: {
    green: {
        entry: ['turnOnGreen'],
        exit: ['turnOffGreen'],
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
        entry: ['turnOnYellow'],
        exit: ['turnOffYellow'],
      on: {
        TIMER: {
          target: 'red',
          actions: 'notifyRed',
        }
      }
    },
    red: {
        entry: [
          assign({ redLights: (ctx) => ctx.redLights + 1 }),
          'turnRedOn',
        ],
        exit: [ allOff ],
      on: {
        TIMER: 'green'
      }
    }
  }
},
{
  actions: {
    turnOnGreen: (context,event) => {digitalWrite(greenLed,on);},
    turnOffGreen: (context,event) => {digitalWrite(greenLed,off);},
    turnOnYellow: (context,event) => {digitalWrite(yellowLed,on);},
    turnOffYellow: (context,event) => {digitalWrite(yellowLed,off);},
    turnOnRed: (context,event) => {digitalWrite(redLed,on);},
    turnOffRed: (context,event) => {digitalWrite(redLed,off);},
    notifyRed: function() {console.log('Going to Red!');}
  }
}
);

// setup the machine interpreter
const lightService = interpret(lightMachine);

lightService.subscribe((state) => {
  console.log('At state: ' + state.value + ' with context:');
  console.log(state.context);
  console.log(' ');
});

// run the state machine (send three TIMER events)
lightService.start();
lightService.send('TIMER');
lightService.send('TIMER');
lightService.send('TIMER');