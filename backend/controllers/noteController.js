import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find();   //find notes that belong to a particular user
    res.json(notes);
});

export { getNotes };
