import { Component } from "react";
import "./monster-card.styles.css";

export default function MonsterCard({
  monster: { id, name, website },
  setNumber,
}) {
  // const { id, name, website } = props.monster;
  return (
    <figure>
      <img
        src={`https://robohash.org/${id}?set=set${setNumber}&size=180x180`}
        alt={name}
      />
      <figcaption>
        <h2>{name}</h2>
        <p>{website}</p>
      </figcaption>
    </figure>
  );
}
