require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;  


// moddle weare

app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.54bcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();


        const visaCollaction = client.db("VisaDB").collection('AllVisa');
        const addVisaCollaction = client.db("VisaDB").collection('AddVisa');


        app.post('/visas', async (req, res) => {
            const newVisa = req.body;
            const result = await visaCollaction.insertOne(newVisa);
            res.send(result)

        })

        app.get('/visas/id', async (req, res) => {
            const allVisa = visaCollaction.find();
            const result = await allVisa.toArray();
            res.send(result);
        })
        app.get('/visas/type', async (req, res) => {
            const allVisa = visaCollaction.find();
            const result = await allVisa.toArray();
            res.send(result);
        })
        app.get('/visas/type/:type', async (req, res) => {
            const Type = req.params.type;



            const query = { visaType:  Type};
            const result = await visaCollaction.find(query).toArray();
            res.send(result)
        })

        app.get('/visas', async (req, res) => {
            const allVisa = visaCollaction.find();
            const result = await allVisa.toArray();
            res.send(result);
        })

        app.get('/visas/limited', async (req, res) => {
            const allVisa = visaCollaction.find().sort({ _id: -1 }).limit(6);
            const result = await allVisa.toArray();
            res.send(result);
        })

        app.delete('/visas/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await visaCollaction.deleteOne(query);
            res.send(result)
        })

        app.patch('/visas/id/:id', async (req, res) => {
            const id = req.params.id;

            const data = req.body;
            const query = { _id: new ObjectId(id) };

            const upaDate = {
                $set: {
                    country: data.country,
                    photo: data.photo,
                    visaType: data.VisaType,
                    Age: data.age,
                    Validity: data.validity,
                    fee: data.price,
                    method: data.method,
                    description: data.description,
                    Processing_time: data.Processing_time,
                    Required_documents: data.Required_documents
                },

            };
            const result = await visaCollaction.updateOne(query, upaDate);
            res.send(result)

        })


        app.get('/visas/id/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await visaCollaction.findOne(query);
            res.send(result)
        })



        app.get('/visas/:Email', async (req, res) => {
            const Email = req.params.Email;



            const query = { email: Email };
            const result = await visaCollaction.find(query).toArray();
            res.send(result)
        })



        app.post('/addedvisa', async (req, res) => {
            const newVisa = req.body;
            const result = await addVisaCollaction.insertOne(newVisa);
            res.send(result)

        })

        

        app.get('/addedvisa/:email', async (req, res) => {
            const email = req.params.email;
            const { searchParams } = req.query;
        
            try {
                let query = { Email: email };
        
                if (searchParams) {
                    query.countryName = { $regex: searchParams, $options: "i" };
                }
        
                const result = await addVisaCollaction.find(query).toArray();
                res.send(result);
            } catch (error) {
                console.error(error);
                res.status(500).send({ error: 'An error occurred while fetching the data.' });
            }
        });



        app.delete('/addedvisa/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) };
            const result = await addVisaCollaction.deleteOne(query);
            res.send(result)
        })

        app.get('/addedvisa/:email', async (req, res) => {
            const email = req.params.email;


            const query = { Email: email };
            const result = await addVisaCollaction.find(query).toArray();
            res.send(result)
        })








        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Visa navigate is runing')
})

app.listen(port, () => {
    console.log(`port is runing ${port}`);

})


