import Books from "../../../models/Books"
import dbConnect from "../../../utils/db"

export default async function handler(req, res) {
    const {method} = req;
    
    await dbConnect();

    if(method === "POST"){
       try{
          const book = await Books.create(req.body);
          res.status(201).json("Your book has been added successfully")
       }catch(err){
        res.status(500).json(err);
       }
    }

    if(method === "GET"){
       try{
          const book = await Books.find();
          res.status(201).json(book)
       }catch(err){
        res.status(500).json(err);
       }
    }
  }

  
  