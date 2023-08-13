import express from "express";

import Ffmpeg from "fluent-ffmpeg";
const app = express();
app.use(express.json());
app.post("/process-video", (req,res)=>{
    //create path for input video file from req body
    const inputFilePath= req.body.inputFilePath;
    const outputFilePath= req.body.outputFilePath;

    if(!inputFilePath||!outputFilePath){
        //later specify which of the file is missing (output/input)
        res.status(404).send("Bad Request Missing path")
    }
   Ffmpeg(inputFilePath)
   .outputOptions("-vf","scale=-1:360")
   .on("end",()=>{
     res.status(200).send("Video Processing Finished");
   }).on("error",(err)=>{
    console.log(`An error occured:${err.message}`);
    res.status(500).send(`Internal Server Error: ${err.message}`);
   }).save(outputFilePath);
  
})
const port =process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`video processing service listening on port ${port}`);
    

})