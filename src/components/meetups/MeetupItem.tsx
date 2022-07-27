import Meetup from "../../models/Meetup";
import cssStyle from "./MeetupItem.module.css";
import Card from "../ui/Card";
interface MeetupItemProps {
  meetup: Meetup;
}
function MeetupItem(props: MeetupItemProps) {
  const { meetup } = props;
  return (
    <li className={cssStyle.item}>
      <Card>
        <div className={cssStyle.image}>
          <img src={meetup.image} alt={meetup.description} />
        </div>
        <div className={cssStyle.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={cssStyle.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
