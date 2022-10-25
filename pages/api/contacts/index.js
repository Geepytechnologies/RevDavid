import dbConnect from "../../../utils/db";
import Contacts from "../../../models/Contacts";

export default async function handler(req,res) {
  const {method} = req;

  await dbConnect();

  if(method === "GET"){
    try{
        const contacts = await Contacts.find();
        res.status(200).json(contacts);
    }catch(err){
        res.status(500).json(err);
    }
  }

  if(method === "DELETE"){
    try{
        await Contacts.findByIdAndDelete(req.params);
        console.log(req.params)
        res.status(200).json("hello");
    }catch(err){
        res.status(500).json(err);
    }
  }

  if(method === "POST"){
    try{
       const contact = await Contacts.create(req.body);
       res.status(201).json(contact);
    }catch(err){
       res.status(500).json(err);
    }
  }
}