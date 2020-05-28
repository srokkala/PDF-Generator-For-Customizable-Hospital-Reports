# PDF Generator For Customizable Hospital Reports

## Installation and Use
1. Change to the parent directory and run "npm install"

2. The files “data.json” and “compData.json” will have placeholder data inside. The user is free 
to modify that data as needed. To add new data points into the “Median time to first view after 
first sustained eCART elevation, hrs” chart and the “eCART disposition compliance” one, the 
user needs to type “node hours.js” and “node compliance.js” respectively. The charts will be 
generated as images in the /images folder of the parent directory. 

3. Inside the /table folder, there will be a “data.json” file that contains the data points for the 
table, the user is free to modify it to their according need.To generate the table, the user must 
change directory into the /table folder, type “node server.js” to start the server, “node table.js” to 
generate the table, and “node png.js” to generate a picture of that table, also sent to the /images 
folder in the parent directory. 

4. Now that are the images needed are generated, the user must change directory into the /pdf 
folder located in the parent directory. Type “node pdf.js” and the final output PDF document will 
be generated in the parent directory. 

