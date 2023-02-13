const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data, user : {}, add_user: true, id:"add_user", route: true });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
    res.render("add_user", { user : {}, add_user: true, id:"add_user", route: true})
}

exports.update_user = async(req, res) =>{
    console.log({id: req.query.id });
    const {data} = await axios.get('http://localhost:3000/api/users');
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("index", { users: data,user : userdata.data, add_user: false, id: "update_user", route: false});
    })
    .catch(err =>{
        res.send(err);
    })
}