import clientPromise from "../../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const Resolution = client.db("resolution").collection("resolution");
    const bodyObject = req.body;
    const { slug } = req.query;

    switch (req.method) {
      case "POST":
        const ResolutionPost = await Resolution.insertOne(bodyObject);
        res.json({ status: 200, message: "Resolution created" });
        break;
      case "GET":
        if (!slug) {
          const allResolutions = await Resolution.find({}).toArray();
          res.json({ status: 200, data: allResolutions });
        } else {
          const oneResolution = await Resolution.find({ _id : new ObjectId(slug[0]) }).toArray();
          console.log(oneResolution[0])
          if (oneResolution[0]) {
            res.json({ status: 200, data: oneResolution[0] });
          } else {
            res.json({ status: 400, message: "Resolution not found" });
          }
        }
        break;
      case "PATCH":
        const updatedResolution = await Resolution.updateOne(
          { _id : new ObjectId(slug[0]) },
          { $set: bodyObject },
          { returnOriginal: false }
        );
        if (updatedResolution.modifiedCount === 0) {
          res.json({ status: 400, message: "Update failed" });
        } else {
          res.json({ status: 200, message: "Resolution updated!" });
        }
        break;
      case "DELETE":
        const deletedResolution = await Resolution.deleteOne(
          { _id : new ObjectId(slug[0]) }
        )
        if (deletedResolution.deletedCount === 1){
          res.json({ status: 200, message: "Resolution deleted!" });
        }
        else{
          res.json({ status: 400, message: "Delete failed" });
        }
        break;
      default:
        res.json({ message: "Impropriate method" });
        break;
    }
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
}
