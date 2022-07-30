const PORT = process.env.PORT || 3000

const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

const sql = require('./modules/sqlConnect')

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'./views');

app.set('views', viewsPath)


app.get("" , (req, res) => {

res.render("index");


});
app.get("/form" , (req, res) => {
    console.log(req.query)
res.render("form");
});

app.post("/form" , (req, res) => {
    sql.query(`INSERT INTO users VALUES
    (NULL,"${req.body.name}","${req.body.from}","${req.body.age}","${req.body.email}","${req.body.phone}");`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        console.log(fields);
    });

res.redirect(303,"form");
});


app.get("/show" , (req, res) => {
    sql.query('SELECT * FROM users', function (error, results) {
        if (error) throw error;
        res.render("show",{users: results});
      });
});


app.post("/show" , (req, res) => {
    console.log(req.body)

res.render("show");
});

app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});

// sql.query('SELECT * from users', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });

