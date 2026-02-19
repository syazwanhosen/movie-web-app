# Movie Web App

A production-ready, mobile-first web application for discovering movies. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. This project demonstrates modern frontend architecture, performance optimization, and clean code practices.

## 🚀 Features

* **Discover Movies**: Browse a vast list of movies with infinite scrolling.
* **Sorting**: Sort movies by Release Date, Popularity, or Alphabetical order.
* **Movie Details**: View comprehensive details including synopsis, genres, rating, and duration.
* **Responsive Design**: Mobile-first UI that adapts seamlessly to tablet and desktop screens.
* **Performance**: Optimized images using `next/image`, lazy loading, and server-side rendering.
* **Pull-to-Refresh**: Custom implementation for mobile touch interactions.

## 🛠 Tech Stack

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)

## 🏁 Getting Started

### Prerequisites

* Node.js 18.17 or later
* npm or yarn or pnpm or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/syazwanhosen/movie-web-app.git
    cd movie-web-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Environment Setup:**
    The application uses the TMDB API. While the assignment provided a key directly, in a real-world scenario, this would be in an environment file.
    
    ```bash
    NEXT_PUBLIC_API_KEY = '328c283cd27bd1877d9080ccb1604c91'
    NEXT_PUBLIC_BASE_URL = 'https://api.themoviedb.org/3'
    NEXT_PUBLIC_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
    ```
    
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests

Unit tests are implemented using Jest and React Testing Library.

    npm test
    # or
    yarn test
    # or
    pnpm test
    # or
    bun run test
