
import mongoose from "mongoose";
const StudentSchema=mongoose.Schema({
    UserName:{type:String},
    email:{type:String},
    StudentId:{type:String,
        require:[true,"Student ID is required"],
        unique:[true,"Student ID already exist"]
        },
    RegisteredBy:{type:String},
    dob:{type:String},
    Year:{type:String},
    gen:{type:String},
    pho:{type:String},
    dist:{type:String},
    Pic:{type:String},
    Dep:{type:String},
    con:{type:String},
    attendance:{type:String},
    Sem:{type:String},
    Imark:
        {
            Isub1:{type:Number},
            Isub2:{type:Number},
            Isub3:{type:Number},
            Isub4:{type:Number},
            Isub5:{type:Number},
            Isub6:{type:Number}
        },
    Smark:
        {
            Ssub1:{type:Number},
            Ssub2:{type:Number},
            Ssub3:{type:Number},
            Ssub4:{type:Number},
            Ssub5:{type:Number},
            Ssub6:{type:Number}
        }
    
})

export default mongoose.model.student||mongoose.model("student",StudentSchema)