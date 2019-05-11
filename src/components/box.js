import React, {Component} from 'react';

class Box extends Component {

	render() {

		/* random colors*/ 
		/*let rgb = []

		for (var i = 0; i < 3; i++) {
			let r = Math.floor(Math.random() * 256)
			rgb.push(r)
		}*/

		const appBox= {
			float: 'left',
			textAlign: 'center',
			width: '300px',
			minHeight: '280px',
			position: 'relative',    /*parent relative*/
			backgroundColor: `${this.props.color}`
			/*backgroundColor: `rgb(${rgb})`	random colors	*/
		}
		const round= {
			border: '3px solid #a3a4aa',
			borderRadius: '8px',
			color: '#5a5a5c',
			display: 'inline-block',
			padding: '1% 5%'
		}
		const hrBox= {
			width: '40px',
			marginLeft: 'auto',
			marginRight: 'auto'
			}

		const button2 ={
			backgroundColor: 'rgba(245, 245, 245, 0.89)', 
			border: '2px solid #e1e1e4',
			borderRadius: '8px',
			padding: '1% 4%',
			position: 'absolute',    /*child absolute*/
			bottom: '4%',
			marginLeft: '-19%',
			cursor: 'pointer',
			fontWeight: 'bold',
			color: `${this.props.color}`
		  }	

		return(
			<div className="box" style={appBox} >
				<h4 style={round}> {this.props.title} </h4>
				<hr style={hrBox}></hr>
				<p> {this.props.desc} </p>
				<button style={button2} > En savoir plus </button>
			</div>	
		);
	}
}

export default Box;
