import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  };
  
  function PostsComponent() {
    const { data: posts, isLoading, error } = useQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
    });
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default PostsComponent;
