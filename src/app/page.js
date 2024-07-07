import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js Home Page</h1>
      <Counter />
    </div>
  );
};

export default HomePage;
