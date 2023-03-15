const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Initialize the switch status
let switchStatus = false;

// Parse JSON request body
app.use(bodyParser.json());

// Serve HTML form to turn on/off the switch
app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/api/changeswitch">
      <input type="submit" name="submit" value="${switchStatus ? 'Turn off' : 'Turn on'}">
    </form>
  `);
});

// API endpoint to update the switch status
app.post('/api/changeswitch', (req, res) => {
  switchStatus = !switchStatus;
  res.redirect('/');
});
app.get("/api/switch",(req,res) =>{
res.send(switchStatus)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
