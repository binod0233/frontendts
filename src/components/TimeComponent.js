import React, { useContext } from "react";
import Countdown from "react-countdown";
// import GetCustomerContainer from "./GetCustomerContainer";
import { UserContext } from "./GetCustomerContainer";
const TimeComponent = () => {
  //   const [retime, setretime] = useState(0);
  const user = useContext(UserContext);
  const Completionist = () => <span>You are good to go!</span>;
  var retime = user * 1000 * 60 - 10000;
  console.log("ssssssssssssssss timeeeeeeeeeeeeee", retime);
  //   const interval = setInterval(() => {

  //   }, 1000);

  //   return () => clearInterval(interval);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          Estimated time: {hours}hrs{minutes}min
        </span>
      );
    }
  };

  return (
    <div>
      <Countdown date={Date.now() + retime} renderer={renderer} />
    </div>
  );
};

export default TimeComponent;
