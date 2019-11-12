



	
		);
		</div>
		</Scroll>
		<CardList robots= {filteredRobots} />
		<div className='tc'>
		<h1 className= 'f1'> Smart RoboFriends</h1>
		<Scroll>
		<SearchBox searchChange= {this.onSaerchChange} />
		super()
	.then(response=> response.json())
	.then(users=> this.setState({robots: users}));
	const filteredRobots = robots.filter(robot =>{
	const {robots, searchfield} = this.state;
	constructor() {
	fetch('http://jsonplaceholder.typicode.com/users')
	return(
	robots: [],
	searchfield: ''
	this.setState({searchfield: event.target.value })	
	})
 }	
class App extends Component {
componentDidMount() {
export default App;
import './App.css';
import CardList from '../components/CardList';
import React, {Component} from 'react';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
onSearchChange = (event)=> {
render() {
return robot.name.toLowerCase().includes(searchfield.toLowerCase());
this.state = {
}
}
}
}
}