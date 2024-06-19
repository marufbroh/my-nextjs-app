const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic product page of {params.productId}</h1>
    </div>
  );
};

export default DynamicPage;
