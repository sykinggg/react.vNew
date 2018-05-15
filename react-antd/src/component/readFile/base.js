import React from 'react';

class readFileBase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="root">
                <p>base</p>
                <p>{this.time}</p>
                <p>{this.num}</p>
            </div>
        )
    }
}

export default readFileBase;