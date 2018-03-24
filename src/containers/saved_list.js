import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SavedListItem from './saved_list_item';


class SavedList extends Component{
	render(props){
		if(this.props.savedItems.savedItems.length <= 0){
			return(
				<div class="col-xs-12 col-md-4">
		            <div class="panel panel-default">
		                <div class="panel-heading">
		                    <h3 class="panel-title">Saved Items</h3>
		                </div>
		                <ul class="list-group">
							<li className="list-group-item">No saved items.</li>
		           		</ul>
		            </div>
	          	</div>
          	);
		}
		return(
			<div class="col-xs-12 col-md-4">
	            <div class="panel panel-default">
	                <div class="panel-heading">
	                    <h3 class="panel-title">Saved Items</h3>
	                </div>
	                <ul class="list-group">
						{ this.props.savedItems.savedItems.map( savedItem => <SavedListItem savedItem={ savedItem } 
							key={ savedItem.url } /> ) }
	           		</ul>
	            </div>
          	</div>
		);
	}
}

function mapStateToProps(state){
	return({
		savedItems: state.savedItems
	});
}




export default connect(mapStateToProps)(SavedList);