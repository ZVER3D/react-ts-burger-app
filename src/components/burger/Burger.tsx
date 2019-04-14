import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { RootContext } from '../../store/RootStore';
import BurgerIngredient from './BurgerIngredient';

interface IProps {}

const Div = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

const Burger: React.FC<IProps> = observer(() => {
  const {
    burger: { ingredients },
  } = useContext(RootContext);

  const ingr: JSX.Element[] = Object.entries(ingredients)
    .map(([ing, amount], i) => {
      const res: JSX.Element[] = [];
      for (let j = 0; j < amount; j++) {
        res.push(<BurgerIngredient key={ing + i + j} type={ing as any} />);
      }
      return res;
    })
    .flat();

  return (
    <Div>
      <BurgerIngredient type="bread-top" />
      {ingr.length === 0 ? <p>Add Some ingredients please</p> : ingr}
      <BurgerIngredient type="bread-bottom" />
    </Div>
  );
});

export default Burger;
