import React, {Component} from 'react';

import Signal from 'signals'

const myObject = {
    started: new Signal(),
    stopped: new Signal(),
};

function onStarted(param1, param2){
    console.log('param1' , param1);
    console.log('param2' , param2);
}
myObject.started.add(onStarted); //add listener
myObject.started.dispatch('foo', 'bar'); //dispatch signal passing custom parameters
myObject.started.remove(onStarted); //remove a single listener

class pubSub1 extends Component {
    render() {
        return(
            <div>pubSub1</div>
        )
    }
}

export default pubSub1;