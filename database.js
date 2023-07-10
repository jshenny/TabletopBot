const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tabletop:table123@cluster0.axl7y9d.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// The database to use
const dbName = "chatMessagesDB";
let db, col;

async function run(username, channel, content) {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        db = client.db(dbName);
        // Use the collection "people"
        col = db.collection("messages");
        // Construct a document                                                                                                                                                              
        let message = {
            "username": username,
            "channel": channel,
            "content": content,
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(message);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

// run().catch(console.dir);