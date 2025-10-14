# 📝 NoteMaker - Modern Note-Taking Application

A full-stack MERN (MongoDB, Express, React, Node.js) note-taking application with a beautiful indigo-themed UI, markdown support, and user authentication.

![NoteMaker](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.x-blue.svg)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Indigo-themed glassmorphic design** with smooth animations
- **Responsive layout** that works on all devices
- **Custom scrollbars** with indigo glow effects
- **Floating navigation bar** with blur effects
- **Dark mode** optimized interface

### 📝 **Note Management**
- **Create, Read, Update, Delete (CRUD)** operations for notes
- **Markdown support** with live preview
- **Category organization** for better note management
- **Search functionality** to find notes quickly
- **Expandable/collapsible** note cards
- **Auto-resizing text areas** for comfortable editing

### 🔐 **User Authentication**
- **Secure user registration** and login
- **JWT-based authentication** for API security
- **Password hashing** with bcrypt
- **Profile management** with picture upload
- **Cloudinary integration** for image storage

### 🚀 **Performance & Features**
- **Redux state management** for predictable state updates
- **React Router** for seamless navigation
- **Axios interceptors** for API calls
- **Form validation** and error handling
- **Loading states** and error messages
- **Protected routes** for authenticated users

## 🛠️ Tech Stack

### **Frontend**
- **React 18.x** - UI library
- **Redux & React-Redux** - State management
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI components
- **React Markdown** - Markdown rendering
- **Axios** - HTTP client
- **Custom CSS** - Indigo-themed styling

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Dotenv** - Environment variables

## 📦 Installation

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)
- npm or yarn package manager

### **Clone the Repository**
```bash
git clone https://github.com/yourusername/NoteMaker.git
cd NoteMaker
```

### **Backend Setup**

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=cloudinary://your_api_key:your_api_secret@your_cloud_name
```

4. Start the backend server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### **Frontend Setup**

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed):
```env
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🗂️ Project Structure

```
NoteMaker/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── noteController.js     # Note CRUD operations
│   │   └── userController.js     # User authentication
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── noteModel.js          # Note schema
│   │   └── userModel.js          # User schema
│   ├── routes/
│   │   ├── noteRoutes.js         # Note API routes
│   │   └── userRoutes.js         # User API routes
│   ├── .env                      # Environment variables
│   ├── server.js                 # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── actions/              # Redux actions
│   │   │   ├── notesActions.js
│   │   │   └── userActions.js
│   │   ├── components/           # Reusable components
│   │   │   ├── ErrorMessage/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Loading/
│   │   │   └── MainScreen/
│   │   ├── reducers/             # Redux reducers
│   │   │   ├── notesReducers.js
│   │   │   └── userReducers.js
│   │   ├── screens/              # Page components
│   │   │   ├── CreateNote/
│   │   │   ├── LandingPage/
│   │   │   ├── LoginScreen/
│   │   │   ├── MyNotes/
│   │   │   ├── ProfileScreen/
│   │   │   ├── RegisterScreen/
│   │   │   └── SingleNote/
│   │   ├── store.js              # Redux store
│   │   ├── App.js                # Main app component
│   │   ├── App.css               # Global styles
│   │   ├── bootstrap.min.css     # Custom Bootstrap theme
│   │   └── index.js              # Entry point
│   └── package.json
│
└── README.md
```

## 🎯 Usage

### **Registration & Login**
1. Visit the landing page
2. Click "Register" to create a new account
3. Fill in your details (name, email, password, profile picture)
4. Login with your credentials

### **Creating Notes**
1. After logging in, click "Create New Note"
2. Enter title, content (supports Markdown), and category
3. Preview your note in real-time
4. Click "Create Note" to save

### **Managing Notes**
- **View all notes** on the "My Notes" page
- **Search notes** using the search bar in the navbar
- **Expand/Collapse** notes by clicking on the title
- **Edit notes** by clicking the "Edit" button
- **Delete notes** by clicking the "Delete" button

### **Profile Management**
- Click on your name in the navbar
- Select "My Profile"
- Update your name, email, password, or profile picture
- Click "Update" to save changes

## 🎨 Customization

### **Theme Colors**
Edit the CSS variables in [`frontend/src/App.css`](frontend/src/App.css):
```css
:root {
    --color-primary-light: #9fa8ff;
    --color-primary: #5a67d8;
    --color-primary-dark: #3c4aa1;
    --color-bg: #0a0a0f;
    --color-text: #ffffff;
    --color-text-muted: #a0aec0;
}
```

### **Navbar Style**
Modify [`frontend/src/bootstrap.min.css`](frontend/src/bootstrap.min.css) `.custom-navbar` class for navbar customization.

### **Scrollbar Design**
Customize scrollbar styles in [`frontend/src/bootstrap.min.css`](frontend/src/bootstrap.min.css) using the webkit scrollbar selectors.

## 🔒 Security Features

- **Password hashing** with bcrypt (10 salt rounds)
- **JWT tokens** for secure authentication
- **Protected API routes** with middleware
- **HTTP-only cookies** (optional implementation)
- **Input validation** on both client and server
- **Environment variables** for sensitive data

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Deployment

### **Backend Deployment (Heroku/Railway/Render)**

1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update the database connection string

### **Frontend Deployment (Vercel/Netlify)**

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the build folder to your hosting platform
3. Update API endpoints in the frontend code

### **Environment Variables for Production**
Ensure all environment variables are set:
- `MONGO_URI`
- `JWT_SECRET`
- `CLOUDINARY_URL`
- `NODE_ENV=production`

## 🐛 Known Issues & Troubleshooting

### **CORS Errors**
If you encounter CORS issues, ensure the backend has proper CORS configuration:
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### **Image Upload Issues**
- Verify Cloudinary credentials in `.env`
- Check file size limits (default: 1MB)
- Ensure accepted formats: `image/png`, `image/jpeg`

### **MongoDB Connection Issues**
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Ensure network access is configured

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rishika Agarwal**
- GitHub: [@Rishika-993](https://github.com/Rishika-993)
- Email: rishikaagrawal22@gmail.com

## 🙏 Acknowledgments

- React Bootstrap for UI components
- Cloudinary for image hosting
- MongoDB Atlas for database hosting
- The open-source community

## 📞 Support

For support, email rishikaagrawal22@gmail.com or open an issue in the GitHub repository.

---

**⭐ Star this repository if you found it helpful!**

Made with ❤️ using MERN Stack