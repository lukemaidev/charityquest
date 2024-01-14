import clientPromise from "../../../lib/mongodb";
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  //Main API routes

  const client = await clientPromise;
  const Resolution = client.db("resolution").collection("resolution");
  const bodyObject = req.body;
  const { slug } = req.query;

  try {
    const client = await clientPromise;
    const user = client.db("resolution").collection("user");
    const bodyObject = req.body;
    const { slug } = req.query;
    switch (req.method) {
      case "GET":
        const oneResolution = await Resolution.find({
          userName: slug[0],
        }).toArray();
        const observerResolution = await Resolution.find({
            observerName: slug[0],
        }).toArray();
        console.log(oneResolution[0]);
        if (observerResolution[0]) {
          res.json({ status: 200, data: observerResolution});
        }
        else if (oneResolution[0]){
            res.json({ status: 200, data: oneResolution});
        }
        else {
          res.json({ status: 400, message: "Resolution not found" });
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
