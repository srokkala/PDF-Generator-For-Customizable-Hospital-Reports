const fs = require('fs');
// JSON data
const data = require('./data.json');

const createRow = (item) => `
  <tr>
    <td>${item.Facility}</td>
    <td>${item.avgCensus}</td>
    <td>${item.avgDetail}</td>
    <td>${item.avgDisp}</td>
    <td>${item.medianTimeFirstView}</td>
    <td>${item.medianTimeFirstDisp}</td>
    <td>${item.totalComp}</td>
  </tr>
`;

/**
 * @description Generates an `html` table with all the table rows
 * @param {String} rows
 * @returns {String}
 */
const createTable = (rows) => `
  <table>
    <tr>
        <th>Facility</td>
        <th>Avg Daily eCART Census</td>
        <th>Avg Daily Detail Views</td>
        <th>Avg Daily Disposition Set</td>
        <th>Median Time to First View, hrs</td>
        <th>Median Time to First Disposition, hrs</td>
        <th>Total Disposition Compliance, %</td>
    </tr>
    ${rows}
  </table>
`;

/**
 * @description Generate an `html` page with a populated table
 * @param {String} table
 * @returns {String}
 */
const createHtml = (table) => `
  <html>
    <head>
      <style>
        table, th, td {
          border: 1px solid black; 
        }
        table {
          width: 100%;
        }
        tr {
          text-align: left;
          border: 1px solid black;
        }
        th, td {
          padding: 15px;
        }
        tr:nth-child(odd) {
          background: #FFF
        }
        tr:nth-child(even) {
          background: #CCC
        }
        .no-content {
          background-color: red;
        }
      </style>
    </head>
    <body>
      ${table}
    </body>
  </html>
`;

/**
 * @description this method takes in a path as a string & returns true/false
 * as to if the specified file path exists in the system or not.
 * @param {String} filePath 
 * @returns {Boolean}
 */
const doesFileExist = (filePath) => {
	try {
		fs.statSync(filePath); // get information of the specified file path.
		return true;
	} catch (error) {
		return false;
	}
};

try {
	/* Check if the file for `html` build exists in system or not */
	if (doesFileExist("build.html")) {
		console.log('Deleting old build file');
		/* If the file exists, delete the file from system */
		fs.unlinkSync("build.html");
	}
	/* generate rows */
	const rows = data.map(createRow).join('');
	/* generate table */
	const table = createTable(rows);
	/* generate html */
	const html = createHtml(table);
	/* write the generated html to file */
	fs.writeFileSync("build.html", html);
	console.log('Succesfully created an HTML table');
} catch (error) {
	console.log('Error generating table', error);
}





