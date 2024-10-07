"use client";
import { useState } from "react";

type Post = {
  id: number;
  content: string;
};

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Discussion Forum</h1>
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={addPost}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Post
        </button>
      </div>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-2 rounded mb-2">
            {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}
