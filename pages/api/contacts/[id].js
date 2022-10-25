import dbConnect from "../../../utils/db";
import Contacts from "../../../models/Contacts";

export default async function handler(req, res) {
    const {method, query:{id}} = req;

  await dbConnect();

  if(method === "DELETE"){
    try{
        await Contacts.findByIdAndDelete(id);
        console.log(id)
        res.status(200).json("deleted");
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
  }
}
  