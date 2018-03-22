import React, { Component } from 'react';
import PlanetListItem from './planet_list_item'

class PlanetList extends Component{
	mapPlanetsToListItems(){
		return this.props.planets.map( planet => {
			return(
				<PlanetListItem 
					className="list-group-item" 
					planet={ planet } 
					key={ planet }/>
			);
		});
	}
	render(props){
		if(!this.props.planets){
			return(null);
		}
		return(
			<div class="col-md-4">
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

export default PlanetList;