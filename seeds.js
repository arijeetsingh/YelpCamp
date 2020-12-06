var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name : "Cloud's Rest",
        image : "https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg",
        description : "blah blah blah blah"
    },
    {
        name : "Canyon Floor",
        image : "https://media.timeout.com/images/105658195/image.jpg",
        description : "blah blah blah blah"
    },
    {
        name : "Desert Mesa",
        image : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=640:*",
        description : "blah blah blah blah"
    },
    {
        name : "King's Hill",
        image : "https://img1.10bestmedia.com/Images/Photos/379809/GettyImages-904960682_54_990x660.jpg",
        description : "blah blah blah blah"
    }
]
function seedDB(){
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");

        // ADD A FEW CAMPGROUNDS
        data.forEach(function(seed){
            Campground.create(seed, function(err,campground){
                    if(err){
                        console.log(err);
                    } else{
                        console.log("ADDED A NEW CAMPGROUND");
                        // ADD A FEW COMMENTS
                        Comment.create(
                           {
                               text : "This is a great place to be",
                               author : "Homer"
                           }, function(err, comment){
                               if(err){
                                   console.log(err);
                               }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Comment Added");
                            }
                        });
                    }
                });
            });
        });
}
module.exports = seedDB;