# 🌍 german-lernreise

A dynamic, AI-enhanced platform to help learners master the German language through interactive lessons, flashcards, games, and personalized content.

---

## 🚀 Live Demo
Coming soon via [Vercel](https://vercel.com)

---

## 📦 Tech Stack

- **Framework**: Next.js (App Router, MDX support)
- **Styling**: Tailwind CSS, DaisyUI / ShadCN
- **Auth**: Firebase (coming soon)
- **AI Integration**: DeepL API, ChatGPT (planned)
- **Markdown**: Obsidian-compatible `.mdx`
- **Game Mode**: (planned) 2D top-down retro web game

---

## ✨ Features

- 📘 Auto-generated lesson dropdown from `.mdx`
- 🧠 AI-ready architecture for custom lesson building
- 🔐 Login system (Firebase auth in progress)
- 🃏 Flashcard builder from vocab
- ✍️ Syncs with Obsidian and Notion documentation

---

## 📁 Folder Structure (WIP)

```bash
├── /content/lessons/        # Markdown-based lessons
├── /pages/lessons/[slug].js # Dynamic MDX rendering
├── /lib/getLessonsList.js   # Server-side file parser
├── /components/             # UI Components
├── /public/                 # Static assets
├── /docs/                   # Dev notes (Obsidian synced)
```

---

## 📚 Dev Journal

This project documents my journey into full-stack web development, AI, and language learning.  
Progress and notes are maintained in:

- 📓 `docs/` folder (Obsidian-synced markdown)
- 🗂 [Notion Project Journal](https://www.notion.so/) *(link coming soon)*

---

## 🛠 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Edit the homepage via `app/page.tsx`. Changes auto-update.

---

## 🧠 Future Plans

- DeepL + ChatGPT-powered AI lesson generation
- Top-down educational web game (Berlin/Vienna explorer)
- Mobile-friendly vocab and flashcard apps
- User dashboard with XP and progress tracking
- Custom user learning paths

---

## 🙋‍♂️ Author

**Kieran Reilly**  
GitHub: [dripz0r](https://github.com/dripz0r)  
Project Repo: [mysite-login](https://github.com/dripz0r/mysite-login)

---

## 📄 License

MIT — free to use, modify, and learn from.

---

## 📓 Developer Journal
All daily dev notes, screenshots, and logs:  
📁 [`/dev-notes/`](./dev-notes/)
