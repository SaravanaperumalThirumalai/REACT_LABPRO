import { useParams, Link } from "react-router-dom";

export default function Post() {

  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content:
        "React is a JavaScript library developed by Facebook.\n\nIt helps build fast responsive user interfaces."
    },
    {
      id: 2,
      title: "Understanding Components",
      content:
        "Components are independent building blocks in React.\n\nThey improve reusability and organization."
    }
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (

    <div>

      <Link to="/">Back to Home</Link>

      <h1>{post.title}</h1>

      <p style={{ whiteSpace: "pre-line" }}>
        {post.content}
      </p>

    </div>

  );

}