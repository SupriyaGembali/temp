module.exports = function(app){

    //index route
    app.get('/index',function(req,res){
        res.render('index');
    });
    
    

    //contact route
    app.get('/contact',function(req,res){
        res.render('contact');
    });
};
