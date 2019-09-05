const Author = require("./models");

module.exports = {
    home : (req,res)=>{
        Author.find({}, (err,data)=>{
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data);
                res.json(data);
            }
        })
    },
    
    create: (req,res)=>{
        Author.create({
            name: req.body.name,
            quote: req.body.quote
            }, function(err,data){
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data.name);
                res.json(data);
            }
        })
    },

    update: (req,res)=>{
        Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err,data){
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data.name);
                res.json(data);
            }
        })
    },

    remove: (req,res)=>{
        Author.findByIdAndDelete(req.params.id, function(err,data){
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data);
                res.json(data);
            }
        })
    },

    find: (req,res)=>{
        Author.findById(req.params.id, function(err,data){
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data.name);
                res.json(data);
                
            }
        })
    },

    add: (req,res)=>{
        Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err,data){
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(data.name);
                res.json(data);
            }
        })
    },
};