# 🚗 Car Showroom — Virtual Auto Dealership SPA

A modern virtual auto dealership Single Page Application (SPA) built with **React 19**, **TypeScript**, and **Vite**. The application allows visitors to browse available vehicles, search and filter models by various parameters, view detailed specifications, and express their thoughts via custom reviews.

🔗 **Live Demo (Vercel):** [Car Showroom](https://car-showroom-test.vercel.app/)

---

## 🚀 Key Features

### 1. Catalog Page (`/`)

- **Vehicle Listing:** Responsive grid displaying vehicles filtered from the DummyJSON Products API (`vehicle` category).
- **Search & Filtering:** Real-time search by title/brand, category filter, price range slider, and sorting (by price, rating, or name).
- **Loading States:** Smooth user experience with loaders during API fetching.

### 2. Vehicle Detail Page (`/vehicles/:vehicleId`)

- **Comprehensive Specs:** Image gallery with interactive thumbnail selector, full technical details, pricing, stock availability, and warranty policies.
- **Reviews Section:** Integrated display of both original API reviews and user-generated local comments.
- **Review Submission Form:**
  - Strict validation for required fields (`reviewerName`, `comment`).
  - Max length constraints (30 chars for Name, 500 chars for Comment) with a real-time character counter.
  - Special character and script sanitization on user input.
  - **Data Persistence:** User reviews are persisted in browser `localStorage` and remain available after page reloads.

### 3. Error Handling & 404 (`*`)

- **NotFound Page:** Handles undefined routes with a clear call-to-action to return to the catalog.
- **Resilient Network Handling:** Displays error states with `Retry` actions for failed API requests.

---

## 🛠 Tech Stack

- **Frontend Framework:** React 19, TypeScript, Vite
- **State Management:** Zustand + `persist` middleware (`localStorage`)
- **Routing:** React Router v7
- **Styling:** CSS Modules, Native CSS Variables (Light/Dark design token support, fully responsive 420px–1440px)
- **Code Quality & Tooling:** ESLint, Prettier, Husky

---

## 💻 Local Development Setup

- Ensure you have Node.js (>= 18.0.0) and npm / pnpm / yarn installed.

# 1. Clone the Repository

```bash
git clone https://github.com/AntonOmelchuk/car-showroom-test.git
```

# 2. Install Dependencies

```bash
cd car-showroom-test
npm install
```

# 3. Set Up Environment Variables

```bash
cp .env.example .env
```

# 4. Start Development Server

```bash
npm run dev
```

- Open **http://localhost:5173** in your browser.

# 5. Production Build & Preview

```bash
npm run build
npm run preview
```

### 📝 License

- Created as part of the _“CAR SHOWROOM”_ technical assessment.
