import React from 'react';
import axios from 'axios'

export class Create extends  React.Component {
    constructor() {
        super();
        //we need to bind the event handlers on constructor so we can use them among other events.
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeyear = this.onChangeyear.bind(this);
        this.onChangeposter = this.onChangeposter.bind(this);

        //Initializing local state by assigning an object to this.state
        this.state = {
            title: '',
            year: '',
            poster: '',
        }
    }
    //method to check if the information is stored 
    onSubmit(e) {
        e.preventDefault();
        alert("Movie:" + this.state.title +" " +"year: " + this.state.year +" "+ this.state.poster);
        //object
        const newMovie = {
            title : this.state.title,
            year : this.state.year,
            poster : this.state.poster
        }
        //HTTP client that allows us to make GET and POST requests from the browser
        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });

    }

    //method to change the title information for the object in the this.state  
    onChangetitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    //method to change the year information for the object in the this.state 
    onChangeyear(e){
        this.setState({
            year: e.target.value
        });
    }
    //method to change the poster information for the object in the this.state 
    onChangeposter(e){
        this.setState({
            poster: e.target.value
        });
    }
    render() {
        return (//divs/form/labels/input field to get the information and to be formated
            <div className='App'>             
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangetitle}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeyear}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.poster}
                            onChange={this.onChangeposter}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Movie' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}