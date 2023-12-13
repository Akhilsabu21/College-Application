import bcrypt from 'bcrypt';
import pkg from 'jsonwebtoken';
import adminSchema from '../Model/Admin.model.js';
import staffSchema from '../Model/Staff.model.js';
import StudentSchema from '../Model/Student.model.js'



const { sign } = pkg;


export async function addAdmin(req, res) {


    try {
        // console.log(req.body);
        const { UserName, Password, Profile } = req.body;
        if (!UserName && Password && Profile)
            return res.status(404).send("Fileds are empty");
        bcrypt.hash(Password, 10)
            .then((hashedPassword) => {
                adminSchema.create({ UserName, Password: hashedPassword, Profile });
            })
            .then(() => {
                res.status(201).send({ msg: `${UserName}` })
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    } catch (error) {
        console.log(error);
    }
}

export async function login(req, res) {
    try {
        const { UserName, Password } = req.body;
        const user = await adminSchema.findOne({ UserName });
        if (user === null) return res.status(404).send({ msg: "user not exist" });
        const success = await bcrypt.compare(Password, user.Password);
        if (success !== true) return res.status(404).send({ msg: "password is incorrect" });
        const token = await sign({ UserName }, process.env.JWT_KEY, { expiresIn: "8h" });
        console.log(token);
        return res.status(200).send({ msg: "successfully loged in", token })
    } catch (error) {
        console.log(error);
    }
}
export async function home(req, res) {
    // console.log(req.user.UserName);
    try {
        const name = req.user.UserName;
        return res.status(200).send({ msg: name })
    } catch (error) {
        return res.status(404).send(error)
    }
}
export async function deleteAdmin(req, res) {
    try {
        const { id } = req.params;
        await adminSchema.deleteOne({ _id: id })
        console.log("DELETED");
    } catch (error) {
        console.log(error);
    }
}




// staff


export function addStaff(req, res) {
    // console.log("hai");
    try {
        console.log(req.body);
        const { UserName, email, Password, StaffId,salary,dep, Post, Exp, RegisteredBy, dob, gen, pho, Pic, dist } = req.body;
        if (!UserName && Password)
            return res.status(404).send("Fileds are empty");
        bcrypt.hash(Password, 10)
            .then((hashedPassword) => {
                staffSchema.create({ UserName, email, Password: hashedPassword, StaffId,salary,dep, Post, Exp, RegisteredBy, dob, gen, pho, Pic, dist });
            })
            .then(() => {
                res.status(201).send({ msg: `${UserName}` })
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    } catch (error) {
        console.log(error);
    }
}
export async function staffLogin(req, res) {
    try {
        const { UserName, Password } = req.body;
        const user = await staffSchema.findOne({ UserName });
        if (user === null) return res.status(404).send({ msg: "user not exist" });
        const success = await bcrypt.compare(Password, user.Password);
        if (success !== true) return res.status(404).send({ msg: "password is incorrect" });
        const token = await sign({ UserName }, process.env.JWT_KEY, { expiresIn: "8h" });
        console.log(token);
        return res.status(200).send({ msg: "successfully loged in", token })
    } catch (error) {
        console.log(error);
    }
}
export async function staffHome(req, res) {
    try {
        const name = req.user.UserName;
        const data= await staffSchema.findOne({UserName:name})
        return res.status(200).send({ msg: name ,dep:data.dep})
    } catch (error) {
        return res.status(404).send(error)
    }
}
export async function getAllStaffs(req, res) {
    const data = await staffSchema.find();
    res.status(200).send(data);
}
export async function singleStaff(req, res) {
    try {
        const { id } = req.params;
        const data = await staffSchema.findOne({ _id: id });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }
}
export async function removeStaff(req, res) {
    const { id } = req.params;
    console.log(id);
    staffSchema.deleteOne({ _id: id }).then(() => {
        console.log("delete");
        res.status(200)
    }).catch((error) => {
        console.log(error);
    })
    res.end();
}
export async function editStaff(req, res) {
    try {
        const { id } = req.params;
        const { UserName, email, Password, StaffId, Post, Exp,salary,dep, RegisteredBy, dob, gen, pho, Pic, dist } = req.body;
        if (!UserName && Password)
            return res.status(404).send("Fileds are empty");
        const hashedPassword= await bcrypt.hash(Password, 10)
                await staffSchema.updateOne({_id:id},{$set:{ UserName, email, Password: hashedPassword, StaffId, Post, Exp,salary,dep, RegisteredBy, dob, gen, pho, Pic, dist }});
        res.status(200).send("updated")
    } catch (error) {
        console.log(error);
    }
    res.end();
}

// staff


// student

export async function addStudent(req, res) {
    try {
        console.log(req.body);
        const { UserName, email,con,Sem, StudentId, Dep, Year, RegisteredBy, dob, gen, pho, Pic,attendance, dist , Imark , Smark} = req.body;
        if (!UserName && StudentId)
            return res.status(404).send("Fileds are empty");
        const data= await StudentSchema.create({ UserName, email,con, StudentId, Dep,Sem, Year, RegisteredBy,attendance, dob, gen, pho, Pic , dist , Imark , Smark});
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
    }
}

export async function studentLogin(req, res) {
    try {
        const { StudentId , dob } = req.body;
        const SId = await StudentSchema.findOne({ StudentId });
        if (SId === null) return res.status(404).send({ msg: "Student id not exist" });
        const data= await StudentSchema.findOne({StudentId:StudentId})
        const success = data.dob===dob;
        if (success !== true) return res.status(404).send({ msg: "Date of Birth is incorrect" });
        return res.status(200).send({ msg: "successfully loged in",id:data._id })
    } catch (error) {
        console.log(error);
    }
}

export async function AllStudents(req, res) {
    const data = await StudentSchema.find();
    res.status(200).send(data);
}
export async function singleStudent(req, res) {
    try {
        const { id } = req.params;
        const data = await StudentSchema.findOne({ _id: id });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }
}
export async function removeStudent(req, res) {
    const { id } = req.params;
    console.log(id);
    StudentSchema.deleteOne({ _id: id }).then(() => {
        console.log("delete");
        res.status(200)
    }).catch((error) => {
        console.log(error);
    })
    res.end();
}

export async function editStudent(req, res) {
    try {
        const { id } = req.params;
        const { UserName, email, con , StudentId, Dep, Year, RegisteredBy, dob, gen, pho, Pic, dist, Imark , Smark} = req.body;
        if (!UserName && StudentId)
            return res.status(404).send("Fileds are empty");
                await StudentSchema.updateOne({_id:id},{$set:{  UserName, email,  con , StudentId, Dep, Year, RegisteredBy, dob, gen, pho, Pic, dist, Imark , Smark}});
        res.status(200).send("updated")
    } catch (error) {
        console.log(error);
    }
    res.end();
}


// student

