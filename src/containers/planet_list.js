import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanetListItem from './planet_list_item';

class PlanetList extends Component{

	mapPlanetsToListItems(){
		return this.props.planets.map( planet => {
			return(
				<PlanetListItem  
					planet={ planet } 
					key={ planet.url }/>
			);
		});
	}

	render(props){
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
						{ this.mapPlanetsToListItems() }
	           		</ul>
	            </div>
          	</div>
		);
	}
}

const mapStateToProps(state){
	return({
		planets: state.planets
	});
}


export default connect(mapStateToProps)(PlanetList);