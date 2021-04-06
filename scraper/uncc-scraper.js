const axios = require('axios');

const fs = require('fs');


const url = 'https://cci.uncc.edu/academics/bachelor-degrees';

axios(url)
    .then(response => {
        const html = response.data;
        console.log(html); // grab html from this url

        fs.writeFile('HtmlOutput.txt', html, (err) => {
            if (err) throw err;
        }) // writes the html from this site to txt document

        
    })