import Images from "../../../models/Images";
import dbConnect from "../../../utils/db"

export default async function handler(req, res) {
    const {method} = req;
    
    await dbConnect();

    if(method === "POST"){
       try{
          await Images.create(req.body);
          res.status(201).json("Your Image has been added successfully")
       }catch(err){
        res.status(500).json(err);
       }
    }

    if(method === "GET"){
       try{
          const images = await Images.find();
          res.status(201).json(images)
       }catch(err){
        res.status(500).json(err);
       }
    }
  }
  