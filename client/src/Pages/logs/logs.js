import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    creator: "",
  });

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ title: "", message: "", creator: "" }); // reset form
      fetchPosts(); // refresh posts
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <br /><br />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <br /><br />
        <input
          type="text"
          placeholder="Your Name"
          value={formData.creator}
          onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>All Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <p key={post._id}>
            <b>{post.title}</b>: {post.message} (by {post.creator})
          </p>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default App;
