import React from 'react';

class uncontrollableComponent extends React.Component{
	constructor(props) {
		super(props);
		this.form = {};
		this.formData = {
			name: 'name',
			msg: 'aaaaa'
		}
	}

	submit = (e) => {
		e.preventDefault();
		for(let i in this.form){
			let value = this.form[i];
			console.log(value);
			console.log(value.value);
		}
	}

	onChange = (e) => {
		console.log(e);
	}

	render() {
		return(
			<form onSubmit={this.submit}>
				<label>
					Name:
					<input type="text"
						   id="name"
						   value={this.formData.name}
						   ref={input => {this.form.Name = input}}
						   onChange={this.onChange}/>
				</label>
				<label>
					Msg:
					<input type="text"
						   id="msg"
						   value={this.formData.msg}
						   ref={input => {this.form.msg = input}}
						   onChange={this.onChange}/>
				</label>
				<input type="submit" value="submit"/>
			</form>
		)
	}
}

export default uncontrollableComponent