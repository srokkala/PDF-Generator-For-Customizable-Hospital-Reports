const io = require('./comp_io/');
const graphing = require('./comp_graphing');
const generateImage = require('./comp_image');

async function main(){
  const dataPoints = await io();
  const server = await graphing(dataPoints);
  const imageLocation = await generateImage();
  server.close();
}

main();