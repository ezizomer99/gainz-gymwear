

const App = () => {

  const categories = [
    {
      id: 1,
      title: "Shorts",
    },

    {
      id: 2,
      title: "Tanktops",
    },

    {
      id: 3,
      title: "Sweatpants",
    },

    {
      id: 4,
      title: "T-Shirts",
    },

    {
      id: 5,
      title: "Hoodies",
    }
  ];



  return (
    <div className="categories-container">
    {categories.map(({title}) => (
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    ))}
    </div>
  );
};

export default App;
