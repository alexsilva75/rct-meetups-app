import Meetup from "../../models/Meetup";
import MeetupItem from "./MeetupItem";
import cssStyle from "./MeetupList.module.css";

interface MeetupListProps {
  meetups: Meetup[];
}
function MeetupList(props: MeetupListProps) {
  const { meetups } = props;

  return (
    <ul className={cssStyle.list}>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
}

export default MeetupList;
