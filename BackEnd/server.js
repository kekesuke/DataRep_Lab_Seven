const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// parse a body of http request
app.use(bodyParser.urlencoded({ extended: false }))
//connect the mongodb
const strMongoDb = 'mongodb+srv://admin:admin@cluster0.j01jt.mongodb.net/mymovies?retryWrites=true&w=majority'
mongoose.connect(strMongoDb, {useNewUrlParser: true});

//Mongoose schema defines the structure of the document
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    Title:String,
    Year:String,
    Poster:String

})
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc
const movieModel = mongoose.model("movie", movieSchema);


// parse application/json
app.use(bodyParser.json())
//allowing us to use cross origin resource sharing ( cors)
app.use(cors());
//
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


//app.get listening for http get request at the url in '' 
app.get('/api/movies', (req, res) => {
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];

    movieModel.find((err,data)=>{
        res.json(data);
    })

});
//listening for http get request
app.get('/api/movies:id', (res,req)=>{
    console.log(req.params.id);
    //searching 
    movieModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

//app.post listening for http get request at the url in '' 
app.post('/api/movies', (req, res) => {
    console.log(req.body)
    //creting new document in mongodb
    movieModel.create({
        Title: req.body.title,
        Year: req.body.year,
        Poster: req.body.poster
    })

    console.log('Movie recieved!')
})

//listening at port 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})