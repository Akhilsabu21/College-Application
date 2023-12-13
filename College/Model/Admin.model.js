import mongoose from "mongoose";
const adminSchema=mongoose.Schema({
    UserName:{type:String,
    require:[true,"Username is required"],
    unique:[true,"username already exist"]
    },
    Password:{type:String,
    require:[true,"Password is required"]
    },
    Profile:{type: String,
    require:[true,"profile photo required"]
    }
})

export default mongoose.model.Admins||mongoose.model("Admin",adminSchema)