

# Next.js Social Media App
---
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-3A0CA3?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aliabdo6/next-social)

This is a social media application built using Next.js with the APP Route version, TypeScript, and Tailwind CSS. The app includes authentication features provided by Clerk Auth.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Clerk Auth
- Responsive design using Tailwind CSS
- User profile and posts management
- Friends list and friend requests
- Birthday reminders
- Sponsored ads section
- Interactive posts with comments, likes, and shares

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- Clerk Auth API credentials

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Aliabdo6/next-social.git
    cd next-social
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add your Clerk Auth API credentials:

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
    CLERK_API_KEY=<your_clerk_api_key>
    ```

## Running the App

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Folder Structure

Here's an overview of the main folders and files in the project:

```
/next-social
|-- /public
|-- /src
|   |-- /components
|   |-- /pages
|   |-- /styles
|   |-- /utils
|-- .env.local
|-- next.config.js
|-- package.json
|-- README.md
|-- tailwind.config.js
|-- tsconfig.json
```

- `/public`: Contains static files like images, fonts, etc.
- `/src/components`: React components for the app.
- `/src/pages`: Next.js pages and API routes.
- `/src/styles`: Tailwind CSS configuration and global styles.
- `/src/utils`: Utility functions and helpers.
- `.env.local`: Environment variables.
- `next.config.js`: Next.js configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Technologies Used

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Clerk Auth**

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

