import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2 className="page-title">GIF APP</h2>
      <div className="page-content">
        <AddCategory setCategories={setCategories} />
        {categories.map(cat => <GifGrid category={cat} key={cat} />)}
      </div>
    </>
  )
};

export default GifExpertApp;
