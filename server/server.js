const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const songRouter = require('./routes/song.router');
const recordingRouter = require('./routes/recording.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/song', songRouter);
app.use('/api/recording', recordingRouter);
app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: "primesonglybucket",
  region: 'us-east-2',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'private', 
  uniquePrefix: true
}));


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;


// const awsRouter =require('./routes/aws.router')
// const UploaderS3Router = require('react-dropzone-s3-uploader/s3router')

// app.use('/s3', UploaderS3Router({
//   bucket: 'primesonglybucket',                           // required
//   region: 'us-east-2',                            // optional
//   headers: {'Access-Control-Allow-Origin': '*'},  // optional
//   ACL: `public-read`,                                 // this is the default - set to `public-read` to let anyone view uploads
// }));

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});



