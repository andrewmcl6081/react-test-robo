import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// This is a smart component because we have state

class App extends Component {

    constructor() {
        super()

        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });
    }

    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value });

    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="app">
                    <h1 className='title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }

}

export default App;