# Time for Travel
An implementation of a full-stack web application for a users to view and save their favorite places around the world.

## Implementation
This web application was built using the MVC (models-views-controllers) Architectural Pattern

implementing the following Tech Stacks:

### For setting the Application Server:
- NodeJs & ExpressJs
### For Data persistence:
- MongoDB Atlas
### For the Front-End:
- EJS files
### For Security:
- Session-based Authentication
- Password Hashing Using <b>BCrypt</b>

### For Deployment:
- <a href="https://render.com/">Render.com</a>

## Usage
1- Clone the Repository and get redirected to the application Folder
```bash
git clone https://github.com/omaarrwaell/Time-for-travel/
cd Time-for-travel
```
2- Create a new Project and a Cluster at <a href="https://www.mongodb.com/atlas/database">MongoDB Atlas</a>

3- Create a new Database inside the cluster and create a Collection inside the Database. This Collection will hold the users data.

4- Adding a .env file in the root application folder with the following content:
```bash
mongoURL = YOUR_MongoDBAtlas_Cluster_URL
database = YOUR_DATABASE_NAME
collection = YOUR_COLLECTION_NAME
secret = YOUR_SESSION_SECRET_STRING
```
replace the words after the '=' sign with your correct credentials

5- Install Required Dependencies
```bash
npm i
```
6- Run the Project
```bash
npm run dev
```
The Application will be available at localhost:3000

