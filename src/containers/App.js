import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hello from '../components/Hello'
import * as clickContainer from '../actions/ClickContainer'

export class App extends Component {

	render() {
		const { hello } = this.props
		const { ClickContainer } = this.props.clickContainer

		return (
			<div className="container">
				<Hello text={hello.text} click={ClickContainer}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		hello: state.hello
	}
}

function mapDispatchToProps(dispatch) {
	return {
		clickContainer: bindActionCreators(clickContainer, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)