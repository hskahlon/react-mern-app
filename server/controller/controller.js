var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty."});
        return;
    }
    // new user
    const user = new Userdb({
        width: req.body.width,
        height: req.body.height,
        color: req.body.color,
        name: req.body.name
    })
    //  save new user
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            message : err.message || "error creating"
        });

};
// retrieve n return all users / or single
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        // read data from db 
        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: err.message || "didnt find user " })
                }
                else {
                    res.send(data);
                }
                
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error user not found" })
            })
    }
    else {
        // read all user from db 
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error user not found" })
            })
    }
    

};
// update user
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "data update cannot be empty." });
        return;
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=> {
            if(!data){
                res.status(404).send(({message:`Cannot update user ${id}`}));
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "couldnt update user" });
        })
};
// delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send(({ message: `Cannot delete user ${id}, possibly inccorect ID provided` }));
            }
            else {
                res.send({message:"user was deleted"});
            }
        })
        .catch(err => {
            res.status(500).send({message:"couldnt deleted user"});
        })
};
