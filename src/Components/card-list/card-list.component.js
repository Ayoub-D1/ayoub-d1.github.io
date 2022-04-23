import MonsterCard from "../monster-card/monster-card.component";
import "./card-list.style.css";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return (
          <MonsterCard
            key={monster.id}
            monster={monster}
            setNumber={props.setNumber}
          />
        );
      })}
    </div>
  );
}
