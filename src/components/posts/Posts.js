"use client"

import { useEffect, useState } from 'react';
import { fetchUsers, fetchPostsByUserId } from '@/utils/api';

const Posts = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name'); 

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'company') {
      return a.company.name.localeCompare(b.company.name);
    }
    return 0;
  });

 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        const getUsers = async () => {
          try {
            const data = await fetchUsers();
            setUsers(data);
          } catch (error) {
            setError('Failed to fetch users. Please try again later.');
          } finally {
            setLoading(false);
          }
        };
    
        getUsers();
      }, []);
    
      const handleUserClick = async (userId) => {
        setSelectedUser(userId);
        try {
          const data = await fetchPostsByUserId(userId);
          setPosts(data);
        } catch (error) {
          setError('Failed to fetch posts. Please try again later.');
        }
      };
    
      if (loading) return <div className="flex justify-center items-center text-gray-900 text-lg">Loading...</div>;
      if (error) return <div className="flex justify-center items-center text-gray-900 text-lg">{error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-5 px-5 bg-gray-200 rounded-md mb-10">
      <div className='text-gray-600 text-lg'>Users Dashboard</div>

      <div className="flex justify-end">
      <input className="form-input px-3 py-2 rounded-full border border-gray-400 text-gray-600 text-sm w-64"
        type="text"
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
       
      <div className='flex justify-end'>
       <select className="px-3 py-2 rounded-full border border-gray-400 text-gray-600 text-sm w-44" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="company">Sort by Company</option>
      </select>
      </div>

      </div>

      <div className="flex items-center justify-center text-gray-900 text-lg">
           {filteredUsers.length === 0 && <p>No users found.</p>} 
      </div>
    
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        { sortedUsers.length > 0 && (sortedUsers.map((user) => (
          <div key={user.id} className="px-4 py-3 rounded-md border border-gray-400 cursor-pointer" onClick={() => handleUserClick(user.id)}>
            <div className="text-sm text-gray-900 font-semibold"><span className='font-semibold pr-2'>Name:</span> {user.name}</div>
            <div className="text-sm text-gray-900 mt-4"><span className='font-semibold pr-2'>Email:</span> {user.email}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Address:</span> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Company:</span> {user.company.name}</div>
          </div>
        )))}
      </div>

    

      {selectedUser && (
        <div className="posts-list">
          <div className="mt-10 text-gray-900 text-md mb-4">Posts by <span className="text-md text-gray-900 font-semibold">{users.find((user) => user.id === selectedUser)?.name} </span></div>

          {currentPosts.map((post) => (
            <div key={post.id} className="grid grid-cols-1 px-4 py-3 rounded-md border border-gray-400 mb-6">
              <div className="text-sm text-gray-900 font-semibold">{post.title}</div>
              <div className="text-sm text-gray-900 mt-2">{post.body}</div>
            </div>
          ))}
          
          <div className="w-full flex items-center justify-center">
            <button className="px-4 py-2 rounded-md border border-gray-400 cursor-pointer mr-4 text-sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-400 cursor-pointer text-sm" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastPost >= posts.length}>
              Next
            </button>
         </div>
    

        </div>
      )}
    </div>
  )
}

export default Posts