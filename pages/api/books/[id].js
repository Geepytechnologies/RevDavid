import dbConnect from "../../../utils/db";
import Books from "../../../models/Books";

export default async function handler(req, res) {
    const {method, query:{id}} = req;

  await dbConnect();

  if(method === "DELETE"){
    try{
        await Books.findByIdAndDelete(id);
        res.status(200).json("Book has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
  }
}
  