import clientPromise from "../../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const CharityOrg = client.db("resolution").collection("charityorg");
    const bodyObject = req.body;
    const { slug } = req.query;

    switch (req.method) {
      case "POST":
        const CharityOrgPost = await CharityOrg.insertOne(bodyObject);
        res.json({ status: 200, message: "CharityOrg created" });
        break;
      case "GET":
        if (!slug) {
          const allCharityOrgs = await CharityOrg.find({}).toArray();
          res.json({ status: 200, data: allCharityOrgs });
        } else {
          const oneCharityOrg = await CharityOrg.find({ _id : new ObjectId(slug[0]) }).toArray();
          console.log(oneCharityOrg[0])
          if (oneCharityOrg[0]) {
            res.json({ status: 200, data: oneCharityOrg[0] });
          } else {
            res.json({ status: 400, message: "CharityOrg not found" });
          }
        }
        break;
      case "PATCH":
        const updatedCharityOrg = await CharityOrg.updateOne(
          { _id : new ObjectId(slug[0]) },
          { $set: bodyObject },
          { returnOriginal: false }
        );
        if (updatedCharityOrg.modifiedCount === 0) {
          res.json({ status: 400, message: "Update failed" });
        } else {
          res.json({ status: 200, message: "CharityOrg updated!" });
        }
        break;
      case "DELETE":
        const deletedCharityOrg = await CharityOrg.deleteOne(
          { _id : new ObjectId(slug[0]) }
        )
        if (deletedCharityOrg.deletedCount === 1){
          res.json({ status: 200, message: "CharityOrg deleted!" });
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
