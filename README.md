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
   ```` 
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

