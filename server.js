const mongoose = require("mongoose");
const uri = "mongodb://senyiblazi_db_user:blazi2006@ac-lfleb9r-shard-00-00.3vduuh4.mongodb.net:27017,ac-lfleb9r-shard-00-01.3vduuh4.mongodb.net:27017,ac-lfleb9r-shard-00-02.3vduuh4.mongodb.net:27017/studyroll?ssl=true&replicaSet=atlas-5tzm9y-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(uri)

function CreateUser() {
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        age: {
            type: Number,
            min: 18
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });
    return userSchema;
}

console.log(CreateUser());
