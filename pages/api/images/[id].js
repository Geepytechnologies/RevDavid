import dbConnect from "../../../utils/db";
import Images from "../../../models/Images";

export default async function handler(req, res) {
    const {method, query:{id}} = req;

  await dbConnect();

  if(method === "DELETE"){
    try{
        await Images.findByIdAndDelete(id);
        res.status(200).json("Image has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
  }
}
  