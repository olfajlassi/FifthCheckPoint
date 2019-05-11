import React, {Component} from 'react';

class Chiffre extends Component {

	render() {
		
		const chiffBox= {
			float: 'left',
			textAlign: 'center',
			width: '140px',
			height: '150px',
			color: 'whitesmoke'
		}

		return(
			<div className="chiffre" style={chiffBox}>
				<h1> {this.props.num} </h1>
				<p> {this.props.detail} </p>
			</div>	
		);
	}
}

export default Chiffre;
