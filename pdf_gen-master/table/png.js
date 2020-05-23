const fs = require('fs');
const puppeteer = require('puppeteer');
// Build paths
//const { buildPathHtml, buildPathPdf } = require('./buildPaths');

const printPng = async () => {
	console.log('Starting: Generating PDF Process...');
	/** Launch a headleass browser */
	const browser = await puppeteer.launch();
	/* 1- Ccreate a newPage() object. It is created in default browser context. */
	const page = await browser.newPage();
	/* 2- Will open our generated `.html` file in the new Page instance. */
	//await page.goto(buildPathHtml, { waitUntil: 'networkidle0' });
	await page.goto('http://127.0.0.1:8000/');
  	await page.waitFor(1500)

	const png = await page.screenshot();


	/* 4- Cleanup: close browser. */
	await browser.close();
	console.log('Ending: Generating PDF Process');
	return png;
};

const init = async () => {
	try {
		const png = await printPng();
		fs.writeFileSync("../images/build.png", png);
		console.log('Succesfully created an PDF table');
	} catch (error) {
		console.log('Error generating PDF', error);
	}
};

init();