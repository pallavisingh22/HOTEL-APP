const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {validateListings,isLoggedIn,isOwner} = require("../middleware.js");
const ExpressError = require("../utils/ExpressError.js");


const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListings,
    wrapAsync(listingController.createListing)
);




//New Route
router.get("/new",isLoggedIn,(req,res)=>{
    
    res.render("listings/new.ejs");
});

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put( isLoggedIn,isOwner,
    upload.single("listing[image]"),
    validateListings,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));


//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingController.renderListing));



module.exports = router ;


