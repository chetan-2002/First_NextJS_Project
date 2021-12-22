// api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = MongoClient.connect(
        "mongodb+srv://admin-chetan:chetan@325@cluster0.aopmq.mongodb.net/meetups?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ messge: "Meetup added successfully" });
  }
}
export default handler;
