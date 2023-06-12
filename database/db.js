const mongoose = require("mongoose")
mongoose.set("strictQuery",true);

const url = "mongodb://127.0.0.1:27017/human-Resource"

const connect = async () => {
    try {
        const client = await mongoose.connect(url)
        console.log("connected");
        return client
    }
    catch(error) {
       console.log(error);
    }
}
module.exports = connect