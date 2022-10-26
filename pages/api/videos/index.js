import Videos from "../../../models/Videos";
import dbConnect from "../../../utils/db"

export default async function handler(req, res) {
    const {method} = req;
    
    await dbConnect();

    if(method === "POST"){
       try{
          await Videos.create(req.body);
          res.status(201).json("Your Image has been added successfully")
       }catch(err){
        res.status(500).json(err);
       }
    }

    if(method === "GET"){
       try{
          const videos = await Videos.find();
          res.status(201).json(videos)
       }catch(err){
        res.status(500).json(err);
       }
    }
  }
  