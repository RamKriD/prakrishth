import React from "react";
import LocalizationContext from "../../services/LocalizationContext";
import Card from "../../components/Card";

function Shashtrarth(props) {
  const locales = React.useContext(LocalizationContext);
  const count = 10;
  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(<Card key={i}/>);
    }
    return cards;
  };
  const cards = renderCards();
  return (
    <React.Fragment>
      <div>{locales.strings.shashtrarth}</div>
      {cards}
    </React.Fragment>
  );
}

export default Shashtrarth;
