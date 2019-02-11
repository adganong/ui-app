import React, { Component } from "react";

class Container extends Component {
	constructor() {
		super();
	}
	state = {
		text: ["textNumberone", "text number two"]
	};

	componentDidMount() {
		//This is how to access an array. I will from here
		fetch("https://baconipsum.com/api/?type=meat-and-filler")
			.then(results => {
				return results.json();
			})
			.then(data => {
				const returnedText = data;
				console.log(returnedText);
				this.setState({ text: returnedText });
			});
	}
	render() {
		return (
			<React.Fragment>
				{this.state.text.map(text => (
					<div>
						<div class="col-6 col-sm-4">{text}</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}

export default Container;
