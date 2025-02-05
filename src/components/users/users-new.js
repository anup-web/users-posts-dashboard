"use client"

import { useRouter } from 'next/router';

import { fetchUsers, fetchPostsByUserId } from '@/utils/api';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const getUserData = async () => {
      try {
        const userData = await fetchUsers(id);
        const userPosts = await fetchPostsByUserId(id);
        setUser(userData);
        setPosts(userPosts);
      } catch (error) {
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
      <p>{user.company.name}</p>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}