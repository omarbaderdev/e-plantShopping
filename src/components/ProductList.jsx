import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import Navbar from './Navbar';

const IMAGES = [
  'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
];

// [name, price, description]
const raw = {
  'Air Purifying Plants': [
    ['Snake Plant', 15, 'Produces oxygen at night and removes toxins.'],
    ['Spider Plant', 12, 'Filters formaldehyde and xylene from the air.'],
    ['Peace Lily', 18, 'Removes mold spores and elegant white blooms.'],
    ['Boston Fern', 20, 'Natural humidifier that traps airborne pollutants.'],
    ['Rubber Plant', 17, 'Large glossy leaves that absorb airborne chemicals.'],
    ['Aloe Vera', 14, 'Purifies the air and soothes minor burns.'],
  ],
  'Aromatic Plants': [
    ['Lavender', 20, 'Calming fragrance that promotes relaxation.'],
    ['Jasmine', 18, 'Sweet floral scent that lifts the mood.'],
    ['Rosemary', 15, 'Fragrant herb, great for cooking.'],
    ['Mint', 12, 'Refreshing aroma that is easy to grow.'],
    ['Lemon Balm', 14, 'Citrus scent that repels mosquitoes.'],
    ['Hyacinth', 22, 'Intensely fragrant spring flowers.'],
  ],
  'Low Light Plants': [
    ['ZZ Plant', 25, 'Thrives on neglect in dim rooms.'],
    ['Pothos', 10, 'Trailing vines that grow almost anywhere.'],
    ['Cast Iron Plant', 19, 'Nearly indestructible in deep shade.'],
    ['Chinese Evergreen', 21, 'Patterned leaves for low-light corners.'],
    ['Dracaena', 24, 'Tall, architectural and easy to care for.'],
    ['Parlor Palm', 16, 'Soft fronds that tolerate low light.'],
  ],
};

const plantsArray = Object.entries(raw).map(([category, plants]) => ({
  category,
  plants: plants.map(([name, cost, description], i) => ({
    name, cost, description, image: IMAGES[i % IMAGES.length],
  })),
}));

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (name) => cartItems.some((i) => i.name === name);

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="product-grid">
        {plantsArray.map((group) => (
          <section key={group.category}>
            <h2 className="category-title">{group.category}</h2>
            <div className="product-list">
              {group.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <h3 className="product-title">{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <div className="product-price">${plant.cost}</div>
                  <button
                    className="product-button"
                    disabled={isInCart(plant.name)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
