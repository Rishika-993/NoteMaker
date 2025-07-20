export const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;

    // if (!name || !email || !password) {
    //     res.status(400);
    //     throw new Error('Please fill all the fields');
    // }

    // // Here you would typically check if the user already exists and save the new user to the database
    // // For now, we will just return a success message
    // res.status(201).json({ message: 'User registered successfully' });

    res.json({
        name,
        email
    });
};
