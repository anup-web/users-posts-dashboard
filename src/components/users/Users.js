"use client"


import { fetchUsers } from '@/utils/api';
import Link from 'next/link';
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
      <h1>Users Dashboard</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <Link href={`/users-new/${user.id}`}>
            <h2>{user.name}</h2>
            </Link>
            <p>{user.email}</p>
            <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users