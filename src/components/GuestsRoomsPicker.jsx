import PropTypes from "prop-types";
import { NumberPicker } from "./";

import "./GuestsRoomsPicker.css";

const GuestNumberPicker = () => {
  return (
    <div styleName="guest-number-picker">
      <div styleName="room-guest">
        <div styleName="room-guest-type">大人</div>
        <div styleName="room-guest-description">年齡 20+</div>
      </div>
      <NumberPicker />
    </div>
  );
};

const Room = () => {
  return (
    <>
      <div styleName="room-description">房間：2 人</div>
      <GuestNumberPicker />
    </>
  );
};

const GuestRoomPicker = ({ people, rooms, handleDistribution }) => {
  //TODO: implement Number Picker
  return (
    <div style={{ width: 380, height: 380, background: "white", padding: 16 }}>
      <div styleName="title">住客人數：3 人 / 2 房</div>
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
