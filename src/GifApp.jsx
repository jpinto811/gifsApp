import { useState } from "react";
import  { AddCategory, GifGrid } from "./components"

const GifApp = () => {
  const [categories, setCategories] = useState(["Your Gif "]);

  const onAddCategory = (onNewCategory) => {

      if (categories.includes(onNewCategory)) return

    setCategories([onNewCategory, ...categories]);
  };

  return (
    <>
    <div className="container">

      <div className="logo"><img src="./logotipo.png" alt="" /></div>

      <AddCategory
            onNewCategory={ onAddCategory }
      />


      {categories.map((category) => (
         <GifGrid
            key={category}
            category={category} />
        ))
      }
    </div>
    </>
  );
};

export default GifApp;
