Mongoose Assignment using mongoose and express create two collections:

-	user collection:
•	username
•	email
•	password
•	age
•	gender
•	phone

-	product collection:
•	name
•	description
•	price
•	userID (must be related to the user collection)

Users APIs	
1-	sign up (email must be unique)
2-	sign in
3-	update user
4-	delete user
5-	search for user where his name contains with "X" and age less than Y, please note that X, Y are variables
6-	search for users where their ages are between X and Y
7-	get all users with their products

Products APIs
1-	add product (make sure that user already exist)
2-  update product (product owner only)
3-	delete product (product creator only)  
4-	get all products with their owner’s information (using populate) sorted descending (By createdAt field)
