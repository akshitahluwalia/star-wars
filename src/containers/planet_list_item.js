import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import saveItem from '../actions/save_item';

class PlanetListItem extends Component{
	render(props){
		console.log(this.props);
		return(
			<li className="list-group-item clearfix">
				<span>{ this.props.planet.name }</span>
				<span className="pull-right">
		        	<button className="btn btn-xs btn-info" onClick={ () => this.props.saveItem(this.props.planet) }>Save</button>
		      	</span>
			</li>
		);
	}
}
function mapStateToProps(state){
	return({

	});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		saveItem: saveItem
	},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PlanetListItem);