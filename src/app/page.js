import Posts from "@/components/posts/Posts";

import Users from "@/components/users/Users";


export default function Home() {
  return (
        <div className="container mx-auto py-4 px-4">            
            {/* <Users />  */}            
            <Posts /> 
        </div>
  );
}
