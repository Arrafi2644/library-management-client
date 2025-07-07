# 📚 LibraryMate

**LibraryMate** is a modern library management web application built with React, Vite, and Tailwind CSS. It allows users to **add**, **view**, **update**, **borrow**, and **delete** books. Users can also track their borrowed books through a dedicated **Borrow Book Summary** page.

---

## Live Link: 

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 🚀 Features

- 📖 Add new books to the library
- 🔍 View detailed information about each book
- ✏️ Update existing book entries
- 🗑️ Delete books from the library
- 📦 Borrow books and track borrowing history
- 📄 Borrowed Book Summary page for easy tracking

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Forms & Validation**: React Hook Form + Zod
- **Routing**: React Router 7
- **Date Handling**: date-fns
- **UI Components**: Radix UI, Lucide Icons
- **Notifications**: React Toastify
- **Table Management**: TanStack React Table

---

## 📦 Installation

```
# Clone the repository
git clone https://github.com/your-username/librarymate.git
cd librarymate

# Install dependencies
npm install
 ``` 
▶️ Usage
Development Server
```
npm run dev
```

Build for Production
```
npm run build
```
Preview Production Build
```
npm run preview
```
Lint the Code
```
npm run lint
```
🧱 Project Structure

📁 src/
├── components/         # Reusable UI components
├── features/           # Book and Borrow features
├── pages/              # Application pages like Home, Book Details, Borrow Summary
├── hooks/              # Custom React hooks
├── store/              # Redux state management
├── utils/              # Utility functions
└── main.tsx            # App entry point

⚙️ Configuration

This project uses Vite and TypeScript. Some configurable parts include:
```
    TailwindCSS configuration: tailwind.config.js

    ESLint rules: .eslintrc

    Vite settings: vite.config.ts

    TypeScript settings: tsconfig.json
```