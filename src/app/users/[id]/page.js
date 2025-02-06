

export default async function User({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
  
    if (user.error) {
      return <div>{user.error}</div>;
    }
  
    return (
      <div className="container mx-auto py-4 px-4">
        <div className="text-lg text-gray-900 font-semibold mb-10">User Details</div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">        
        <div className="px-4 py-3 rounded-md border border-gray-400">
            <div className="text-sm text-gray-900 font-semibold"><span className='font-semibold pr-2'>Name:</span> {user.name}</div>
            <div className="text-sm text-gray-900 mt-4"><span className='font-semibold pr-2'>Email:</span> {user.email}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Address:</span> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Phone:</span> {user.phone}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Website:</span> {user.website}</div>
            <div className="text-sm text-gray-700 mt-2"><span className='font-semibold pr-2'>Company:</span> {user.company.name}</div>
          </div>
      </div>
      </div>
    );
  }

