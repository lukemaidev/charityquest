import clientPromise from "../../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;

//For the sake of simplicity, I use the params to check the resultion, 
//in practice please use bodyOject to interact with the API
//and change the name of the file from [[...slug]].js to index.js

export default async function handler(req, res) {
  //Main API routes
  try {
    const client = await clientPromise;
    const Resolution = client.db("resolution").collection("resolution");
    const bodyObject = req.body;
    const { slug } = req.query;

    switch (req.method) {
      case "POST":
        const oneResolution = await Resolution.find({ _id : new ObjectId(slug[0]) }).toArray();
        console.log(oneResolution[0].todayMarked);
        const updatedResolution = await Resolution.updateOne(
          { _id : new ObjectId(slug[0]) },
          { $set: {
            todayMarked: 1,
            weeklyProgress: oneResolution[0].weeklyProgress + 1,
          } },
          { returnOriginal: false }
        );
        res.json({ status: 200, data: updatedResolution[0] });
        break;
      default:
        res.json({ message: "Impropriate method" });
        break;
    }
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
}