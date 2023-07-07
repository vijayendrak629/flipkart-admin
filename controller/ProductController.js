const { response } = require("express");

let ProductController = {
    productHome: (request,response) =>{
        response.send("productHome");
    },
};