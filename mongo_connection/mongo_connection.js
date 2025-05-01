const mongo = require("mongoose");
    // "mongodb://hotel:Ozdu0rSJ2rfFCcuu@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/hotel?ssl=true&replicaSet=atlas-d5fq1b-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster"

mongo
  .connect(
    "mongodb://khaled:rNvGic7WOM24c8GJ@ac-f7mpyky-shard-00-00.rqojdba.mongodb.net:27017,ac-f7mpyky-shard-00-01.rqojdba.mongodb.net:27017,ac-f7mpyky-shard-00-02.rqojdba.mongodb.net:27017/guideMe?ssl=true&replicaSet=atlas-bunrwe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  
  .then(() => {
    console.log("connected mongoose successfull");
  })
  .catch((error) => console.log(error));