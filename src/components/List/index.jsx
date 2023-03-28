import React from "react";
import { Container } from "./styles";
import { TbBellPlus } from "react-icons/tb";
import Card from "../Card";

export default function List({ data,  index: listIndex }) {
  return (
    <Container done={data.done}>
      <header className="header">
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <TbBellPlus />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
      </ul>
    </Container>
  );
}
