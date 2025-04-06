# 🌍 Real-Time Tracing App

A real-time geolocation tracking web application using **Leaflet.js**, **Socket.IO**, **Node.js**, and **EJS**. The app visualizes the live locations of all connected users on a map and updates them in real time.

---

## 🚀 Features

- 📍 Live geolocation tracking of connected users.
- 🔄 Real-time updates using Socket.IO.
- 🗺️ Interactive map rendered with Leaflet.js and OpenStreetMap.
- 🧭 Automatically centers and updates user positions.
- ❌ Handles user disconnections and removes them from the map.


---


## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Leaflet.js
- **Backend:** Node.js, Express, Socket.IO
- **Templating Engine:** EJS
- **Real-Time Engine:** WebSockets via Socket.IO
- **Map Tiles:** OpenStreetMap

---

## 📂 Project Structure


<pre>
RealTime_Tracker
├── assets/                 # Media assets (images for documentation/screenshots)
│   ├── multidevice.png     # Screenshot showing multi-device support
│   ├── preview.png         # Screenshot of application preview
│   └── userdisconnect.png  # Screenshot of user disconnection screen
├── node_modules/           # Node.js dependencies (auto-generated)
├── public/                 # Static assets (CSS, JS, etc.)
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       └── script.js       # Main JavaScript logic
├── views/                  # EJS templates for rendering the frontend
│   └── index.ejs           # Home page view
├── .gitignore              # Git ignore rules
├── app.js                  # Main Express server file
├── package-lock.json       # Auto-generated lock file for dependencies
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
</pre>

---

## ⚙️ How It Works

- When a user opens the app, their geolocation is tracked via the browser's `navigator.geolocation`.
- This location is sent to the server through Socket.IO and broadcasted to all connected clients.
- Each client renders a marker for every user and updates it in real time.
- When a user disconnects, their marker is removed from the map.

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/real-time-tracing-app.git
cd real-time-tracing-app


2. Install Dependencies

npm install


3. Run the Application

node app.js


Visit http://localhost:3000 in multiple tabs or devices to see real-time tracking in action.



📸 Screenshots
Add screenshots here for better visual documentation:

map view with multiple users

marker update animation

user disconnect and marker removal



📌 Dependencies
Leaflet.js

Socket.IO

Express.js

OpenStreetMap


🤝 Contributing
Contributions are welcome!
Fork the repo, create a feature branch, and open a pull request.

📜 License
Licensed under the MIT License.

👨‍💻 Author
Abhishek Tiwari
🔗 GitHub