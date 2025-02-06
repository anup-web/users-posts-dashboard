  "use client"  
  
  import { fetchUsers } from '@/utils/api';
  import { useEffect, useState } from 'react';
  
  
  const Users = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
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
      
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
  
  
    return (
      <div>
        <div className="text-lg text-gray-900 font-semibold mb-10">Users</div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <div key={user.id} className="px-4 py-3 rounded-md border border-gray-400 cursor-pointer">
              <a href={`/users/${user.id}`}>{user.name}</a>
              <p>{user.email}</p>              
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Users