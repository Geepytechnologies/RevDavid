import dbConnect from "../../../utils/db";
import Videos from "../../../models/Videos";

export default async function handler(req, res) {
    const {method, query:{id}} = req;

  await dbConnect();

  if(method === "DELETE"){
    try{
        await Videos.findByIdAndDelete(id);
        res.status(200).json("Video has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
  }
}
  