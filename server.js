const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from your web app directory
app.use(express.static('auto_report'));

// // Define a route for the root URL
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/auto_report/index.html');
// });

app.listen(port, () => {
    console.log(`Server is running on porrt ${port}`);
});

// const fs = require('fs');

// const filePath = 'auto_report/main.min.css';

// fs.access(filePath, fs.constants.R_OK, (err) => {
//     if (err) {
//         console.error(`File cannot be read: ${err}`);
//     } else {
//         console.log('File can be read.');
//     }
// });