const express = require('express')
const app = express()
const port = 3000
const studentModel=require('./student');


app.get('/', (req, res) => {
  res.send('hellow world')
  });
app.get('/allstudents',async (req, res) => {
    try {
      const allStudents = await studentModel.find({});
    // Create a new PDF document
    
  

  
    
      // res.render('studentData', { students: allStudents}); // Render 'index.ejs' and pass fetched data
    res.send(allStudents);
    
    
    } catch (err) {
      console.error('Error fetching student data:', err);
      res.status(500).send('Error fetching student data');
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
