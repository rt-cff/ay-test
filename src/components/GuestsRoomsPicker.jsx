import PropTypes from "prop-types";
import { NumberPicker } from "./";

import "./GuestsRoomsPicker.css";

export const GUEST_TYPE = {
  ADULT: "adult",
  CHILD: "child",
};

const GUEST_DESCRIPTION = {
  [GUEST_TYPE.ADULT]: "大人",
  [GUEST_TYPE.CHILD]: "小孩",
};

const GUUEST_AGE = {
  [GUEST_TYPE.ADULT]: "20",
  [GUEST_TYPE.CHILD]: "0",
};

const GuestNumberPicker = ({ type }) => {
  return (
    <div styleName="guest-number-picker">
      <div styleName="room-guest">
        <div styleName="room-guest-description">{GUEST_DESCRIPTION[type]}</div>
        <div styleName="room-guest-age">年齡 {GUUEST_AGE[type]}+</div>
      </div>
      <NumberPicker />
    </div>
  );
};

const Room = () => {
  return (
    <>
      <div styleName="room-description">房間：2 人</div>
      <GuestNumberPicker type={GUEST_TYPE.ADULT} />
      <GuestNumberPicker type={GUEST_TYPE.CHILD} />
    </>
  );
};

const GuestRoomPicker = ({ people, rooms, handleDistribution }) => {
  //TODO: implement Number Picker
  return (
    <div style={{ width: 380, height: 380, background: "white", padding: 16 }}>
      <div styleName="title">住客人數：3 人 / 2 房</div>
      <Room />
      <hr class="solid" styleName="divider" />
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
