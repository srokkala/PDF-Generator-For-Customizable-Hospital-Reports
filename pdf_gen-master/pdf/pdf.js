//const imagesToPdf = require("images-to-pdf")
//imagesToPdf(["../images/build.png", "../images/comp07-05-2020.png"], "../images/report.pdf")
// path/to/combined.pdf now exists.

const PDFDocument = require('pdfkit');
var fs = require('fs');

// Create a document
const doc = new PDFDocument({layout: "landscape"});

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('../output.pdf'));

// Embed a font, set the font size, and render some text
doc.fontSize(12)
   .text('Hospital System eCART Report Card', 15, 15);

doc.fontSize(12)
   .text('FEB 10 - FEB 16, 2020', 150, 15, {align: 'right'});


// Add an image, constrain it to a given size, and center it vertically and horizontally


doc.image('../images/build.png', 0, 30, {width: 790, height:360})

doc.image('../images/data11-05-2020.png', 5, 320, {width: 380, height:270})

doc.image('../images/comp11-05-2020.png', 400, 320, {width: 380, height:270})

doc.rect(580, 6, 150, 25).stroke();


doc.end();





