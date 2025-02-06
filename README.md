Document ==

Example: 

````
// Fetch users from the API
const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

````

# Users & Posts Dashboard

This is a Next.js application that fetches and displays user profiles and their related posts.

## Features
- Fetch and display a list of users.
- Search users by name or email.
- Sort users by name or company.
- View detailed user information and their posts in a dynamic route.
- Pagination for posts.
- Responsive design for all screen sizes.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/anup-web/users-posts-dashboard.git

````

## Install dependencies:

````
npm install

````

## Run the development server:

````
npm run dev

````

## Tools Used

Next.js

Axios for API calls

Tailwind CSS for styling

## Web app url

````
https://users-posts-dashboard.vercel.app/

````



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
