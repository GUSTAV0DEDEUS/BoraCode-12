import React from "react";
import { Container } from "./styles";
import { TbBellPlus } from "react-icons/tb";
import Card from "../Card";

export default function List({ data }) {
  return (
    <Container>
      <header className="header">
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <TbBellPlus />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card) => (
          <Card
            key={card.id}
            texto={card.content}
            title={card.title}
            tags={card.labels.map((label) => (
              <span key={label.id}>{label.tag}</span>
            ))}
          />
        ))}
      </ul>
    </Container>
  );
}
