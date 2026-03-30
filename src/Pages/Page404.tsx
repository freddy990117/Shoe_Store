import Error from "/public/images/Error404.png";

const Page404 = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <img src={Error} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Page404;
