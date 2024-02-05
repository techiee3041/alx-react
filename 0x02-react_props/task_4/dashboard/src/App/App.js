import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({isLoggedIn}) {
	return (
		<React.Fragment>
			<Notifications />
			<div className='App'>
				<Header />
				{isLoggedIn ? <Login /> : <CourseList />}
				<Footer />
			</div>
		</React.Fragment>
	);
}

App.PropTypes = {
	isLoggedIn: PropTypes.bool
};

App.defaultPropes = {
	isLoggedIn: false
}

export default App;
