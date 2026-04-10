# 🛍️ ShopSavvy

A full-stack product sharing platform where users can list products, discover others' listings, and engage through comments.

## 🚀 Tech Stack

**Frontend**
- React + Vite
- React Router
- TanStack Query (React Query)
- Clerk (Authentication)
- DaisyUI + Tailwind CSS

**Backend**
- Node.js + Express
- TypeScript
- Clerk (Auth middleware)
- Drizzle ORM
- PostgreSQL

## ✨ Features

- 🔐 Authentication via Clerk (sign in / sign up modal)
- 📦 Create, edit, and delete your own products
- 🖼️ Image URL preview when creating a product
- 💬 Comment on any product
- 🗑️ Delete your own comments
- 👤 Profile page to manage your listings
- 🔄 Real-time UI updates with React Query cache invalidation

## 📁 Project Structure

```bash
ShopSavvy/
├── frontend/        # React + Vite app
└── backend/         # Express + TypeScript API
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:
```env
DATABASE_URL=your_postgresql_url
CLERK_SECRET_KEY=your_clerk_secret_key
FRONTEND_URL=http://localhost:5173
PORT=3000
```

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

```bash
npm run dev
```

## 🛣️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/sync` | Sync Clerk user to DB |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| GET | `/api/products/my` | Get current user's products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| POST | `/api/comments/:productId` | Add a comment |
| DELETE | `/api/comments/:commentId` | Delete a comment |

## 📄 License

MIT