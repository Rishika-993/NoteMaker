import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user._id });   //find notes that belong to a particular user
    res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
        res.status(400);
        throw new Error('Please fill all the fields');
    } else {
        const note = new Note({
            user: req.user._id,  //user id from the token
            title,
            content,
            category,
        });
        const createdNote = await note.save();
        res.status(201).json(createdNote);
    }
}); 

const getNotesById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);   //fetching id from url params
    if (note) {
        res.json(note);
    } else {
        res.status(404);
        throw new Error('Note not found');
    }
}); 

const updateNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
    const note = await Note.findById(req.params.id);
    if(note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error('User not authorized to update this note');
    }
    if (note) {
        note.title = title || note.title;
        note.content = content || note.content;
        note.category = category || note.category;
        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404);
        throw new Error('Note not found');
    }
});


export { getNotes, createNote, getNotesById, updateNote };
