import PropTypes from "prop-types";
import { NumberPicker } from "./";

const GuestNumberPicker = () => {
  return (
    <div>
      <div>
        <div>大人</div>
        <div>年齡 20+</div>
      </div>
      <NumberPicker />
    </div>
  );
};

const Room = () => {
  return (
    <>
      <div style={{ margin: "16px 0px" }}>房間：2 人</div>
      <GuestNumberPicker />
    </>
  );
};

const GuestRoomPicker = ({ people, rooms, handleDistribution }) => {
  //TODO: implement Number Picker
  return (
    <div style={{ width: 380, height: 380, background: "white", padding: 16 }}>
      <h4>住客人數：3 人 / 2 房</h4>
      <Room />
    </div>
  );
};

GuestRoomPicker.propTypes = {
  people: PropTypes.number,
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    })
  ),
  handleDistribution: PropTypes.func,
};

export { GuestRoomPicker };
