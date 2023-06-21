const express = require('express');
const path = require('path');
const port = 5001;
const fs = require('fs');
const csv = require('csv-parser');

const findRowById = (id) => {
    return new Promise((resolve, reject) => {
      fs.createReadStream(__dirname + '/public/item_details.csv')
        .pipe(csv({ separator: '|' })) // Set the separator as '|'
        .on('data', (data) => {
          if (data.ID === id) {
            resolve(data);
            console.log(data)
          }
        })
        .on('end', () => {
          reject(new Error('Row not found'));
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  };
  

const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use("/js", express.static(__dirname+"/public/js"));
app.use("/css", express.static(__dirname+"/public/css"));
app.use("/imgs", express.static(__dirname+"/public/imgs"));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/homepage.html"));
})

app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/contactus.html"));
})

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/store.html"));
})

app.get('/items', (req, res) => {
    res.redirect("/store");
})

const csvParserConfig = {
    delimiter: '|',
    headers: ['Item_id', 'Details', 'Value'],
    skipLines: 1, // Skip the first line (header row)
};
  
  
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID:', id);
    const results = [];
    console.log('URL:', req.url);
    fs.createReadStream(__dirname + '/public/item_details.csv')
      .pipe(csv(csvParserConfig)) // Pass the parser configuration
      .on('data', (data) => {
        console.log('Row:', data);
        results.push(data);
      })
      .on('end', () => {
        const row = results.find((row) => row.Item_id.startsWith(id)); // Compare substring
        const rowString = JSON.stringify(row); // Convert row object to string
        const cleanedString = rowString.replace(/["{}]/g, ''); // Remove unwanted characters
        const rowList = cleanedString.split('|'); // Split the string back into a list using '|'

        console.log(rowList);


        console.log('Found Row:', row);
        if (row) {
          const dataToEJS = {
            image: id + '.png',
            price: rowList[2],
            details: rowList[1],
          };
          res.render('items', dataToEJS);
        } else {
          console.error('Row not found');
          res.render('error', { message: 'Item not found' });
        }
      })
      .on('error', (error) => {
        console.error(error);
        res.render('error', { message: 'Error reading CSV file' });
      });
  });
  
   

app.get('/delivery', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/delivery.html"));
})

app.get('/card', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/card.html"));
})
//routes

app.listen(port);
console.log("\n===== *** WEB is running on localhost:5001 *** =====\n")

module.exports = app;