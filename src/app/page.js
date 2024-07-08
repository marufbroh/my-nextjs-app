import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "force-cache",
  });
  const shoes = await res.json();

  // console.log(data);

  return (
    <div>
      <h1>Welcome to Next.js Home Page</h1>
      <div className="grid grid-cols-4 justify-items-center gap-10 p-10">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe.title}</h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-primary">Details</button>
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
