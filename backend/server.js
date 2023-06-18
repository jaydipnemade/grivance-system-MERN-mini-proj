import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import bcrypt from "bcrypt";

const app = express();
app.use(bodyParser.json());
app.use(cors()); // allowing everyone.

// functions
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function addSignup(req, res) {
  const db = client.db("cdac");
  const messageColl = db.collection("user");

  let inputDoc = {
    uname: req.query.username,

    cno: req.query.ContactNo,
    prn: req.query.PRN,
    email: req.query.Email,
    pass: req.query.pass,
    // cnfpass: req.query.cnfpass,
  };
  console.log(inputDoc);
  await messageColl.insertOne(inputDoc);

  await client.close();

  // string response
  // res.send("record added")

  // json response :: preferred
  // res.json({ opr: "success" });
}

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Access the MongoDB database
    const db = client.db("cdac");
    const collection = db.collection("admin");

    // Find the user by email
    const user = await collection.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password hashes
    //   const passwordMatch = await bcrypt.compare(password, user.password);
    var passwordMatch = false;
    if (password === user.password) {
      passwordMatch = true;
    } else {
      passwordMatch = false;
    }

    if (!passwordMatch) {
      // Incorrect password
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Successful login
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/ulogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Access the MongoDB database
    const db = client.db("cdac");
    const collection = db.collection("user");

    // Find the user by email
    const user = await collection.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password hashes
    //   const passwordMatch = await bcrypt.compare(password, user.password);
    var passwordMatch = false;
    if (password === user.password) {
      passwordMatch = true;
    } else {
      passwordMatch = false;
    }

    if (!passwordMatch) {
      // Incorrect password
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Successful login
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// http://localhost:4000/addrecord
app.get("/addsignup", addSignup);

// http://localhost:4000/
app.listen(4000);
