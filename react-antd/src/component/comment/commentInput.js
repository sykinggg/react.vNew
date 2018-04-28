import React from 'react';

class InputBase extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div class="ui labeled input">
				<div class="ui label label">{this.props.itemName}</div>
				{
					this.props.type == 'input' ?
						<input type="text"
							   placeholder={this.props.placeholderName}
							   value={this.props.modal}/>
					:
				}
			</div>
		)
	}
}

class commentInput extends React.Component{
	render(){
		return(
			<div>

			</div>
		)
	}
}

export default commentInput;