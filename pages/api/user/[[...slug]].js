import clientPromise from "../../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  //Main API routes
  try {
    const client = await clientPromise;
    const user = client.db("resolution").collection("user");
    const bodyObject = req.body;
    const { slug } = req.query;

    switch (req.method) {
      case "POST":
        
        const existedUser = await user.find({ _id : new ObjectId(slug[0]) }).toArray();
        if (existedUser[0]) {
          res.json({ status: 400, message: "User already exists" });
          break;
        }
        else{
          const userPost = await user.insertOne(bodyObject);
          res.json({ status: 200, message: "User created" });
          break;
        }
      case "GET":
        if (!slug) {
          const allUsers = await user.find({}).toArray();
          res.json({ status: 200, data: allUsers });
        } else {
          const oneUser = await user.find({ _id : new ObjectId(slug[0]) }).toArray();
          console.log(oneUser[0])
          if (oneUser[0]) {
            res.json({ status: 200, data: oneUser[0] });
          } else {
            res.json({ status: 400, message: "User not found" });
          }
        }
        break;
      case "PATCH":
        const updatedUser = await user.updateOne(
          { _id : new ObjectId(slug[0]) },
          { $set: bodyObject },
          { returnOriginal: false }
        );
        if (updatedUser.modifiedCount === 0) {
          res.json({ status: 400, message: "Update failed" });
        } else {
          res.json({ status: 200, message: "User updated!" });
        }
        break;
      case "DELETE":
        const deletedUser = await user.deleteOne(
          { _id : new ObjectId(slug[0]) }
        )
        if (deletedUser.deletedCount === 1){
          res.json({ status: 200, message: "User deleted!" });
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

/*
For the sake of the hackathon middleware ARE NOT IMPLEMENTED. However the code for implementing middleware is below:
const auth = async (req, res, next) => {
  //JWT authorization
}

const mainAPIRoutes = async (req, res) => {
  //Main API routes
}


export default handler(
  auth,
  mainAPIRoutes,
);

*/
