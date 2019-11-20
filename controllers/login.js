const Users = require('../models').Users;
const ResponseFormat = require('../core').ResponseFormat;
const jwt = require("jsonwebtoken");

module.exports = {
 
   list(req, res) {
    return Users
      .findAll({
        model: Users,
        as: 'users'
      })
    .then(users => res.status(200).json(ResponseFormat.build(
        users,
        "Users Details Fetched Successfully",
        200,
        "success",
        ""
    )))
    .catch(error => res.status(400).json(ResponseFormat.error(
        error,
        "Something went wrong when fetch Users",
        "error"
    )));
    
  },

  login(req, res) {
      return Users.findOne({
        where: { 
          'user_name':req.body.user_name ,
          'password':req.body.password
        } 
      })
      .then(users => 
        {
         if(!users) {
              return res.status(404).json(
                  ResponseFormat.build({},"No user found",404,"error"))
          }
          const token = jwt.sign(
            {
              user_name: users.user_name,
              password: users.password
            },
            "Messi@0934",
            {
              expiresIn: "1m"
            }
          );
          console.log("Token :: " + token);
         //users.token = token;
         return res.status(200).json(
              ResponseFormat.build(users,"Login success",200,"success",token))
        })
      .catch(error => res.status(400).json(ResponseFormat.error(
          error,"Login failure","error"))
      );
  },
};

