import "dotenv/config";
import { MongoClient } from "mongodb";
import { Response } from "express";

// url /api/new-meetup
export default async function handler(req: any, res: Response) {
  if (req.method === "POST") {
    console.log(req);
    const meetUpData = req.body;

    try {
      const client = await MongoClient.connect(
        process.env.MONGODB_URI_WITH_PWD!
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(meetUpData);
      console.log(result);
      client.close();

      res.status(200).json({ message: "Meetup inserted successfully!" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: "An error ocurred! :-(" });
    }
  }
}
