Absolutely! Here's the **complete fixed `README.md`** for your project **MockGenie** — just **copy-paste** this into your `README.md` file:

---

````markdown
# MockGenie 🤖🎯

## Introduction

**MockGenie** is your intelligent AI-powered mock interview assistant, designed to simulate realistic technical interviews in React and Node.js. Whether you're a job seeker looking to sharpen your skills or a recruiter aiming to assess candidates, MockGenie makes the process seamless, efficient, and powerful.

---

## 🚀 Features

- 🎤 **AI-Powered Interviews:** Simulates real-time interviews with OpenAI (GPT-3.5).
- 📄 **PDF Resume Upload:** Admin-only section for uploading and parsing resumes.
- 🧠 **Smart Questioning:** Generates 3 dynamic, relevant questions to minimize token usage.
- 🔍 **Answer Review System:** View all submitted responses via the backend dashboard.
- 🛡️ **Admin-Only Access:** Protected routes for managing submissions.
- ⚙️ **PWA Ready:** Works offline and installable as a Progressive Web App.
- 🐳 **Docker Support:** Fully containerized backend with Docker.

---

## 🧠 Tech Stack

| Layer      | Stack                                |
|------------|---------------------------------------|
| Frontend   | React + Vite                         |
| Backend    | Node.js + Express                    |
| Database   | PostgreSQL (via NeonDB)              |
| ORM        | Prisma                               |
| AI Engine  | OpenAI API (GPT-3.5)                 |
| Cloud      | AWS EC2 / Vercel                     |
| Tools      | Docker, Postman, GitHub              |

---

## ⚙️ Getting Started (Dev Setup)

```bash
# Clone the repository
git clone https://github.com/algoAkshay/MockGenie.git
cd MockGenie

# Install frontend dependencies
npm install

# Setup backend
cd backend
npm install
npm start

# Run frontend (in root)
cd ..
npm run dev
````

---

## 🔐 Admin Access

* Admin route: `/pdf`
* Admin password: `AdminOnly1234` *(set in `.env`)*

Ensure your `.env` file contains:

```
OPENAI_API_KEY=your_key
ADMIN_PASSWORD=AdminOnly1234
```

---

## 🛣 Roadmap

* [x] AI interview with GPT-3.5
* [x] Admin-only resume upload & view
* [x] PWA integration
* [ ] GPT-4 upgrade
* [ ] Candidate scoring & report generation
* [ ] Voice interview mode

---

## 👨‍💻 Author

**Akshay Kumar**
📧 [akshaykumarsingh071825@gmail.com](mailto:akshaykumarsingh071825@gmail.com)
🔗 [github.com/algoAkshay](https://github.com/algoAkshay)



---

Let **MockGenie** power your interview prep or streamline your candidate evaluation.
🧠 Practice smarter. Hire better.

```

