import mongoose from "mongoose";
const staffSchema=mongoose.Schema({
    UserName:{type:String,
    require:[true,"Username is required"],
    unique:[true,"username already exist"]
    },
    email:{type:String},
    Password:{type:String,
    require:[true,"Password is required"]
    },
    StaffId:{type:String},
    Post:{type:String},
    Exp:{type:String},
    dep:{type:String},
    salary:{type:String},
    RegisteredBy:{type:String},
    dob:{type:String},
    gen:{type:String},
    pho:{type:String},
    dist:{type:String},
    Pic:{type:String}
})

export default mongoose.model.staffs||mongoose.model("staff",staffSchema)