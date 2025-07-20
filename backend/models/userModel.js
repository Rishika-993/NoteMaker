import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import e from "express";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        pic: {
            type: String,
            required: true,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {  //middleware to hash password before saving
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);   //asynchronously
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;