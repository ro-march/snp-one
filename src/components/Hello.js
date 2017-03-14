import React, { PropTypes, Component } from 'react';

export default class Hello extends Component {

	onClickHello(e) {
		this.props.click();
	}

	render() {
		const { text } = this.props;
		return (
			<div className="hello" onClick={::this.onClickHello}>
				<span className="tag">&lt;</span>{text}<span className="tag">&gt;</span>
			</div>
		);
	}
}

Hello.propTypes = {
	click: PropTypes.func.isRequired
}