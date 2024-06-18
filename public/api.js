const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");

const connectionString = "mongodb://127.0.0.1:27017";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/clientresponse', function (request, response) {
    const client = new MongoClient(connectionString);
    client.connect()
        .then(() => {
            const dbo = client.db("portfolio");
            const data = {
                "Name": request.body.Name,
                "Email": request.body.Email,
                "Message": request.body.Message
            };
            return dbo.collection("clientdetails").insertOne(data);
        })
        .then(() => {
            console.log('Record inserted');
            response.send({ message: 'Record inserted' });
            return client.close();
        })
        .catch(err => {
            response.status(500).send(err.message);
        });
});

app.listen(2024, () => {
    console.log(`Server Started : http://127.0.0.1:2024`);
});
