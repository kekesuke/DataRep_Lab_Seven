import React from 'react';
import Card from 'react-bootstrap/Card'

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/* <h3>{this.props.movie.Title}</h3>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.Poster}></img>
                            <footer className="blockquote-footer">
                              {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}