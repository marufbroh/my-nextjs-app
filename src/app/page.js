import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  // console.log(data);

  return (
    <div>
      <h1>Welcome to Next.js Home Page</h1>
      <div className="flex justify-around p-5">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 w-80 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">ID: {post.id}</h2>
              <p>Title: {post.title}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Views: {post.views}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Counter />
    </div>
  );
};

export default HomePage;
