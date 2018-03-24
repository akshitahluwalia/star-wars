import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import deleteSavedItem from '../actions/delete_saved_item';

class SavedListItem extends Component{
	render(props){
		console.log(this.props);
		return(
			<li className="list-group-item clearfix">
				<span>{ this.props.savedItem.name }</span>
				<span className="pull-right">
		        	<button className="btn btn-xs btn-info" onClick={ () => this.props.deleteSavedItem(this.props.savedItem) }>Delete</button>
		      	</span>
			</li>
		);
	}
}

function mapStateToProps(state){
	return({});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		deleteSavedItem: deleteSavedItem 
	},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SavedListItem);