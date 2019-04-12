## Starting the app

- `admin/` - contains the admin app
- `shop/` - contains the frontend shop

The `shop` connects to the MongoDB server started by the `admin` app. In order to easily start and reset the project as needed, I have provided two basic shell scripts to run and or reset both applications simultaneously:

cd admin;
meteor --settings settings-local.json --port=3000;

cd shop;
MONGO_URL=mongodb://localhost:3001/meteor meteor --settings settings-local.json --port=4000;
