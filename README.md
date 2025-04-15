<h1 align="center">🎶 Chatify - Realtime Spotify Clone with Global Chat 💬</h1>

<p align="center">
  <img src="https://res.cloudinary.com/danlxus36/image/upload/v1744712597/chatify_c0lu2l.png" width="600" />
  <br />
  <img src="https://res.cloudinary.com/danlxus36/image/upload/v1744712597/chatify3_dcyp2r.png" width="300" />
  <img src="https://res.cloudinary.com/danlxus36/image/upload/v1744712597/chatify2_n5royn.png" width="300" />
  <img src="https://res.cloudinary.com/danlxus36/image/upload/v1744712597/chatify4_bsfppn.png" width="300" />
</p>

---

### 🎧 What is Chatify?

**Chatify** is a real-time music streaming web app — a modern Spotify-style clone that allows users to listen to music, chat live, and see what others are playing. Admins can upload albums and tracks to be shared across all users. This app does **not** use Spotify or YouTube APIs — all music is hosted and managed directly.

---

### 🔥 Features

- 🎵 Listen to music with play, next, and previous controls
- 🔈 Adjust volume with a slider
- 🎧 Admin dashboard to upload songs and create albums
- 💬 Global real-time chat between all users
- 👤 Online/offline user presence tracking
- 👀 View what others are listening to in real-time
- 📊 Analytics page for data insights (admin only)
- ⚙️ Clerk authentication & Cloudinary integration
- 🚀 Full-stack app with smooth UI and live updates

---

### 🛠️ Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/chatify.git
cd chatify
2. Add environment variables
Create .env files in both the backend and frontend folders.

backend/.env

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection
ADMIN_EMAIL=admin@example.com
NODE_ENV=development

CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

frontend/.env

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
🚀 Run the App
From the root folder:

npm install       # Install both frontend & backend dependencies
npm run build     # Builds the frontend
npm run start     # Starts the backend server and serves frontend
The app will be available at http://localhost:5000

🧰 Tech Stack
Frontend: React, Vite, Tailwind CSS, Zustand

Backend: Node.js, Express, MongoDB, Mongoose

Authentication: Clerk

File Uploads: Cloudinary

Realtime Communication: Socket.IO

👑 Admin Dashboard
Admins (based on the ADMIN_EMAIL in .env) can:

Create new albums

Upload songs

View aggregated user/music data

🧑‍💻 Author
Made with ❤️ by Radwan Mansur
GitHub: ReactRay

