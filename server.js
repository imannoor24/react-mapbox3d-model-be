const express = require('express')

const pool = require('./db');

const app = express();
const port = 5000;
var cors = require('cors');
app.use(cors());


app.use(express.json());


app.get("/", (req, res) =>
{
    res.send("Hello World!"); 
})

// app.get("/geom/:params", geomRoutes);
// app.get('/api/users',(req, res) => res.send("users data"))

app.get('/geom', (req, res) => {

   pool.query(`select * from get_data('AvgFam')`, (err, result) => {
        
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Error retrieving data' });
      } 
      else {
        res.json(result.rows);
      }
   });

}); 

app.get('/api', async(req, res) => 
{
try{
    let { p } = req.query;

    // get_data is a postgresql function 
    const query = 'SELECT * FROM get_data($1);';
    const result = await pool.query(query, [p]);


  //pool.query(`select * from get_data($p)`, (err, result) => {
    res.json(result.rows);
}        
catch (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Error retrieving data' });
        } 
      
      });



app.listen(port, () => console.log(`app listening on port ${port}`));