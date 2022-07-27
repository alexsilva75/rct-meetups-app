import cssStyle from "./Card.module.css";
function Card(props: any) {
  return <div className={cssStyle.card}>{props.children}</div>;
}

export default Card;
