const Weight = ({ weight, idealWeight = 70 }) => {
  return weight <= idealWeight ? <p>{weight}⚖️ 😊</p> : <p>{weight}⚖️ 😥</p>;
};

export default Weight;
