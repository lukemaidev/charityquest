import clientPromise from "../../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  //Main API routes
  try {
    const client = await clientPromise;
    const Resolution = client.db("resolution").collection("resolution");
    const user = client.db("resolution").collection("user");
    const bodyObject = req.body;
    const { slug } = req.query;

    switch (req.method) {
      case "POST":
        const ResolutionPost = await Resolution.insertOne(bodyObject);
        const oneUser = await user.find({ userName : bodyObject.userName }).toArray();
        const oneObserver = await user.find({ userName : bodyObject.observerName }).toArray();
        console.log("Test")
        console.log(ResolutionPost.insertedId.toString())
        console.log([...oneUser[0].Resolutions_id, ResolutionPost.insertedId.toString()])
        
        const updatedUser = await user.updateOne(
            { userName : bodyObject.userName},
            { $set: {Resolutions_id: [...oneUser[0].Resolutions_id, ResolutionPost.insertedId.toString()]} },
            { returnOriginal: false }
          );
        const updatedObserver = await user.updateOne(
            { userName :    bodyObject.observerName},
            { $set:  {Resolutions_id: [...oneObserver[0].Resolutions_id, ResolutionPost.insertedId.toString()]} },
            { returnOriginal: false }
          );
        res.json({ status: 200, message: "Resolution created" });
        break;
      default:
        res.json({ message: "Impropriate method" });
        break;
    }
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
}