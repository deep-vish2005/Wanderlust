# 🌍 Roamingo

Roamingo is a full-stack travel and stay booking web application where users can explore, create, and manage property listings across India. It allows users to upload images, view locations on maps, and interact with listings in a modern, responsive UI.

---

## 🚀 Features

* 🏨 Create, edit, and delete property listings
* 📸 Upload multiple images using Cloudinary
* 🗺️ Interactive map integration (Mapbox)
* 🔐 User authentication (Login / Signup / Logout)
* 💬 Flash messages & error handling
* 📱 Fully responsive UI with Bootstrap
* ☁️ Deployed on Render

---

## 🛠️ Tech Stack

**Frontend:**

* EJS (Embedded JavaScript Templates)
* Bootstrap 5
* CSS

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB Atlas
* Mongoose

**Other Integrations:**

* Cloudinary (Image storage)
* Multer (File upload)
* Integrated Leaflet with OpenStreetMap to display interactive maps and location markers for property listings
* Passport.js (Authentication)
* Express-session & Connect-Mongo (Session storage)

---

## 📂 Project Structure

```
Roamingo/
│── models/
│── routes/
│── controllers/
│── views/
│── public/
│── utils/
│── app.js
│── cloudConfig.js
│── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret


```

---

## ▶️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/roamingo.git
cd roamingo
```

2. Install dependencies:

```
npm install
```

3. Add environment variables (see above)

4. Run the server:

```
node app.js
```

5. Open in browser:

```
http://localhost:8080
```

---

## 🌐 Live Demo

👉 [https://your-render-url.onrender.com](https://wanderlust-o6z7.onrender.com)

---



## 🙌 Acknowledgements

* Inspired by Airbnb
* Mapbox for maps
* Cloudinary for image hosting

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Deep Vishwakarma**

---

⭐ If you like this project, consider giving it a star!
