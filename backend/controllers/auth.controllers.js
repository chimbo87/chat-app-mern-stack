import { rmSync } from "fs";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";



// *****************************************************create account******************
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords dont match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already existed" });
    }
    //hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      // If newUser does not exist, handle the error
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in SignUp ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//*********************************************************** */ login***************************
export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      // Generate token and set cookie
      generateTokenAndSetCookie(user._id, res);
      // Send response with user data
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      });
    } catch (error) {
      console.error("Error in controller", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

  // ***************************************************logout**********************

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message:"logged out successfully"});
    }catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }

};
