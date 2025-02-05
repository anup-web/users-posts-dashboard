import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};



export const fetchPostsByUserId = async (userId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };