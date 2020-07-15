import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';

const Contact = ({ cards }) => {
	return(
		<div>
			{/*<Modal />*/} 
			{
				cards.map(card => {
					return(
						<div 
							className='ui raised very padded text container segment'
							style={{marginTop:'80px'}}
							key={card.id} 
						>
							<Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
							<p>{card.body}</p>
						</div>
					)
				})
			}
			{/*<div 
				className='ui raised very padded text container segment'
				style={{marginTop:'80px'}} 
			>
				<Link to='/willma' className='ui header'>Willma</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>*/}			
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards
	}
};

export default connect(mapStateToProps)(Contact);




