import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "Shorts",
    imageUrl: "https://i.pinimg.com/564x/e8/c2/34/e8c2344098671e12327d238fba506c9c.jpg",
    route: "shop/shorts"
  },
  {
    id: 2,
    title: "Tanktops",
    imageUrl: "https://i.pinimg.com/564x/72/8a/3a/728a3a3ba0a2ed9a202990578d17f92e.jpg",
    route: "shop/tanktops"
  },  
  {
    id: 3,
    title: "Sweatpants",
    imageUrl: "https://i.pinimg.com/564x/65/c2/03/65c203d8a52d66e811728d91895a4acf.jpg",
    route: "shop/sweatpants"
  },
  {
    id: 4,
    title: "T-Shirts",
    imageUrl: "https://i.pinimg.com/564x/96/7a/47/967a4746c3a1301f334800f729eba02e.jpg",
    route: "shop/t-shirts"
  },
  {
    id: 5,
    title: "Hoodies",
    imageUrl: "https://i.pinimg.com/564x/55/76/2a/55762a6e1d3a85e5fb7546c28b1758ec.jpg",
    route: "shop/hoodies"
  }
];

const Directory = () => {
    return (
        <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
    </DirectoryContainer>
    )
 };

 export default Directory;