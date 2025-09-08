# 🔗 URL Shortener Web App  

A simple and responsive **URL Shortener Application** built with **React.js**, featuring client-side analytics and a custom **logging middleware** (instead of console logs).  

---

## 📌 Features
- ✅ Shorten long URLs into unique short links.  
- ✅ Supports **custom shortcodes** (alphanumeric).  
- ✅ **Default validity** of 30 minutes if none is specified.  
- ✅ Click tracking with **analytics dashboard** (click count + history).  
- ✅ Client-side persistence with **localStorage**.  
- ✅ **Custom logging middleware** for all actions (no console.log).  
- ✅ Mobile-friendly and responsive UI with smooth animations.  
- ✅ Redirection handling via React Router.  

---

## 🏗️ Folder Structure
```

├── loggingMiddleware/
│   └── loggerMiddleware.js      # Custom logger (mandatory)
├── FrontendTestSubmission/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx              # React frontend
│   │   ├── App.css              # Styling
│   │   └── main.jsx             # Entry point
│   ├── package.json
│   └── vite.config.js
├── assets/
│   └── screenshot.png           # App screenshots (add yours here)
├── README.md

````

---

## ⚙️ Technology Choices
- **React.js (Vite)** → Modern, fast, and component-driven frontend.  
- **LocalStorage** → Simple client-side persistence for demo purposes.  
- **Custom Logging Middleware** → Replaces console logging, ensures extensibility.  
- **CSS Animations** → Smooth user interactions & UI transitions.  

---

## 🚀 Setup & Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>/FrontendTestSubmission
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 📊 Analytics Dashboard

* Track **total clicks**.
* View **click history** (timestamp + source).
* Redirect handled via unique shortcodes.

---

## 📸 Screenshots

Add your screenshots in the `assets/` folder. Example:

<img width="1898" height="899" alt="image" src="https://github.com/user-attachments/assets/897b4d86-2978-4ba6-b882-11f64eb93e1c" />


---


---

## 📌 Assumptions

* All API access is **pre-authorized** (no login/register).
* Shortcodes are **unique** and validated before use.
* Default validity = **30 minutes** (unless specified).

---


---

👉 This README will look **professional on GitHub**.  
Would you like me to also create the **SystemDesign.md** file (linked inside README) so your repo looks complete and submission-ready?
```
