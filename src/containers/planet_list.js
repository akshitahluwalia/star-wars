import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlanetListItem from './planet_list_item';
import initial_load from '../actions/initial_load';

class PlanetList extends Component{

	componentDidMount(){
		this.props.intial_load();
	}

	render(props){
		console.log("planets", this.props)
		if(!this.props.planets){
			return("Loading Planets...");
		}
		return(
			<div class="col-xs-12 col-md-8">
	            <div class="panel panel-default">
	                <div class="panel-heading">
	                    <h3 class="panel-title">Planets</h3>
	                </div>
	                <ul class="list-group">
						{ Object.keys(this.props.planets).map( key => <PlanetListItem planet={ this.props.planets[key] } 
							key={ this.props.planets[key].url }/> ) }
	           		</ul>
	            </div>
          	</div>
		);
	}
}

function mapStateToProps(state){
	return({
		planets: state.planets
	});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		intial_load: initial_load
	},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(PlanetList);