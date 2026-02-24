import { Link } from "react-router-dom";

export default function Home() {

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content: "React is a JavaScript library used to build fast and interactive user interfaces..."
    },
    {
      id: 2,
      title: "Understanding Components",
      content: "Components are the reusable building blocks of a React application..."
    }
  ];

  return (
    <div>

      <h1>Mini Blog – Home</h1>

      <p>Select a blog post to view the full article.</p>

      {posts.map((post) => (

        <div key={post.id}>

          <h2>{post.title}</h2>

          <p>{post.content.substring(0, 90)}...</p>

          <Link to={`/post/${post.id}`}>
            Read Full Post
          </Link>

        </div>

      ))}

    </div>
  );

}