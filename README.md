
# Personal Finance Visualizer 💹

A simple and modern full-stack web application to **track your personal finances**, visualize expenses, and gain insights into your spending. Built using **Next.js**, **MongoDB**, **Express**, and **Recharts** with clean UI using **shadcn/ui**.

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-grey?style=for-the-badge)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge)

## Features: 📊

### Stage 1 – Basic Transaction Tracking
- Add/Edit/Delete transactions
- List view of all transactions
- Monthly expenses bar chart

### Stage 2 – Categories
- Predefined categories
- Pie chart of category-wise expenses
- Dashboard with:
  - Total expenses
  - Recent transactions
  - Category breakdown

### Stage 3 – Budgeting
- Set monthly budgets per category
- Budget vs actual comparison chart
- Simple spending insights

---

## 🗂️ Project Structure
```
/Finance-Tracker-server
├── config/
├── controllers/
├── finance-visualizer-client/ (Next.js app as submodule)
├── models/
├── routes/
├── .env)
├── .gitmodules
├── .gitignore
├── package.json
└── server.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Srish-ty/Finance-Tracker-server.git
cd Finance-Tracker-server
```

### 2. Install Backend Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the Backend Server

```bash
pnpm run dev
```

The server will be running on: `http://localhost:5000/api`

---

## 💻 Frontend Setup

The frontend is inside the `finance-visualizer-client/` submodule.

### 1. Navigate to Frontend Folder

```bash
cd finance-visualizer-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Frontend

```bash
npm run dev
```

App will be live on: `http://localhost:3000`

---

## 🌐 Live Demo

- **Backend API**: [https://finance-tracker-server-n2yh.onrender.com/api/transactions](https://finance-tracker-server-n2yh.onrender.com/api/transactions)
- **Client web app**: [Finance-Tracker-frontend](https://finance-tracker-dashboard.netlify.app/dashboard)
- **GitHub Repo**: [Finance-Tracker-server](https://github.com/Srish-ty/Finance-Tracker-server)

---

## 🛠 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui, Recharts
- **Backend**: Express.js, MongoDB, Mongoose
- **Deployment**: Render, Netlify

---

## 🖼️ Demo

<p float="left">
  <img src="https://github.com/user-attachments/assets/36b35251-36f2-4c5b-9165-9dfe506eebb5" width="45%" />
  <img src="https://github.com/user-attachments/assets/ee4b6a91-0238-4c97-8cc8-14b336ef339f" width="45%" />
</p>

---
