import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import api from '../../services/api';
import { Container } from './styles';
import { FoodDashProps } from '../../types';

interface FoodProps {
  food: FoodDashProps;
  handleDelete: (id: number) => Promise<void>;
  handleEditFood: (food: FoodDashProps) => void;
}

export function Food({ food, handleDelete, handleEditFood }: FoodProps) {
  const [isAvailable, setIsAvailable] = useState(food.available);

  function setEditingFood() {
    handleEditFood(food);
  };

  async function toggleAvailable() {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingFood}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
}