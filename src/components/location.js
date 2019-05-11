import React, {Component} from 'react';

class Location extends Component {

	render() {

		const locBox= {
			float: 'left',
			textAlign: 'center',
			width: '420px',
			height: '300px'
		}
		const locImg= {
			float: 'left',
			width: '400px',
			height: '250px',
			marginLeft: '20px'
		}

		return(
			<div className="location" style={locBox}>
				<img src={require(`${this.props.image}`)} 
					style= {locImg} alt="loc"/>
				<h2> {this.props.title} </h2>
			</div>		
		);
	}
}

export default Location;
