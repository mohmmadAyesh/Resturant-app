# Welcome to Simple Restaurant App.
This is Repo about Our Simple Restaurant App lets explain what it is
## How you can Run the App:
1-First try to clone the repo
2-Open Command Line and Enter Server folder by typing ```cd server```
3-try to run ```npm init```
4-then go to client folder by typing   ```cd  ..``` and then ```cd server```
5-run ```npm init``` inside that folder
6-create a .env file in every folder in server and in client folder
7- try to create **REACT_APP_API_URL** enviroment variable in .env file and give it a value of which port your server is running on 
8-open .env file in server folder and then try to create a **MONGO_URI** then  add **PORT** variable and add **JWT_SECRET** variable this variable is jwt secret key that used in jsonwebtoken library 
9- then at server folder run ``` npm start ```
10-and run ```npm start``` at client folder
### congratulation .
you will face a home page and 3 buttons logout, login , signup and home link 
you press login to login into app and login into website then you notice that there is Menu and profile link once you logged into it then you go to profile page it will show user information with list of order cards when you press on it will go to order page displaying it display each card item with price and quantity and Total Price of these items 
when you press on menu link you show item cards with plus and negative buttons to increase the quantity and total price to represent the quantity then there is a place order button to place your order