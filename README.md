# Megaman Wiki Page
This is a wiki page that displays bosses from the megaman game. The user should be able to add new bosses or edit/delete existing bosses. There are 3 endpoints on the site:
1. **/**: homepage with some information about the site
2. **/bosses**: displays all bosses existing on the server
3. **/bosses/:bossId**: displays detailed information about selected boss

The project contains two folders:
1. **megaman:** this is the website implemented using react and redux
2. **server**: contains all the information displayed on the site
As stated above all the informtaion is fetched from the server and displayed on the site. All fetched information on the site is stored using redux. All changes are also tracked using redux store states.

## How to Run
Start by opening up a terminal and navigating the server folder: <br>
**cd /server**

Then run these commands:
1. npm install 
2. npm start

Then in another terminal to the megaman folder: <br>
**cd /megaman**

Then run these commands:
1. npm install
2. npm start


Once that is done there should a browser pop up opening up the site,
if not the URL for the site is **http://localhost:3000**

Extra information can be found in the README.md file located in the megaman folder
