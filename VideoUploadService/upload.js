const express =require('express')
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require( 'path' );
const app=express();
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors')
app.use(cors());

mongoose
.connect(
    "mongodb://localhost:27017/s3test", 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const ImageSchema = new mongoose.Schema({
    video: String,
    username:String,
	profile:String,
	tags:Array
},{ timestamps: true });
const Image = mongoose.model('image', ImageSchema);


/**
 * PROFILE IMAGE STORING STARTS
 */
 const s3 = new aws.S3({
	accessKeyId:"AKIAQRDZDYZRPJFDPC4U",
	secretAccessKey: "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",
	Bucket:"karthiknbucket1"
});


app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb ){
	// Allowed ext
	const filetypes = /mp4|video/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: Videos Only!' );
	}
}


/**
 * BUSINESS GALLERY IMAGES
 * MULTIPLE FILE UPLOADS
 */
// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
	storage: multerS3({
		s3: s3,
		bucket: "karthiknbucket1",
		
		acl: 'public-read',
		key: function (req, file, cb) {
			cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		}
	}),
	limits:{ fileSize: 200000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).array( 'galleryImage', 40 );

app.post('/video',(req,res)=>{
    uploadsBusinessGallery( req, res, async ( error ) => {
		console.log( 'files', req.files );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.files === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
				// If Success
				let fileArray = req.files,
					fileLocation,mimetype;
					console.dir(req.body,"data")
				const galleryImgLocationArray = [];
				for ( let i = 0; i < fileArray.length; i++ ) {
					fileLocation = fileArray[ i ].location;
					let fileName = fileArray[i].originalname;
					let user = req.body.user
					let profile = req.body.profile
					let tags = req.body.tags
					console.log( 'filename', fileLocation );
					galleryImgLocationArray.push( fileLocation )
					await Image.create( {
						username: user,
						video: fileLocation,
						profile:profile,
						tags:tags
						
					} );
				}
				res.json( {
					filesArray: fileArray,
					locationArray: galleryImgLocationArray,
					
				} );
				
				// Save the file name into database
				
			}
		}
	});
})


app.get("/get",(req,res) =>{
   Image.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        } else {
            console.log(err);
            res.send("Some error occured!")
        } 
    });
})
app.listen(5000);