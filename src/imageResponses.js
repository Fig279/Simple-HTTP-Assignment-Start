const fs = require('fs'); // file system module

const spongeBobImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(spongeBobImage);
    response.end();
};


module.exports.getImage = getImage;


