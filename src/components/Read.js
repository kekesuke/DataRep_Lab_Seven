import React from 'react';
import { Movies } from './Movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []

    };
   //every time a component change a promise is send to a website that return data either succesfull or unsuccsesfull
    componentDidMount() {
        //HTTP client that allows us to make GET and POST requests from the browser
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })//setStates doing UI update and calling the render method. 
            })
            .catch((error) => { // if its unfulfilled its gonna generate an error in the console
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h3>Hello from my read component</h3>
                <Movies movies={this.state.movies}></Movies>
            </div>
        )
    }
}