import { useEffect, useState } from "react";
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

const GuestNumberPicker = ({ type, ...props }) => {
  return (
    <div styleName="guest-number-picker">
      <div styleName="room-guest">
        <div styleName="room-guest-description">{GUEST_DESCRIPTION[type]}</div>
        <div styleName="room-guest-age">年齡 {GUUEST_AGE[type]}+</div>
      </div>
      <NumberPicker {...props} />
    </div>
  );
};

const Room = ({ room, distribution, onChange }) => {
  const { min, max } = room;

  const getRemainingCount = (type) => {
    return (
      max -
      Object.entries(distribution).reduce(
        (c, [key, value]) => c + (type === key ? 0 : value),
        0
      )
    );
  };

  return (
    <>
      <div styleName="room-description">房間：{max} 人</div>

      {Object.values(GUEST_TYPE).map((type) => (
        <GuestNumberPicker
          type={type}
          value={distribution[type]}
          min={min}
          max={getRemainingCount(type)}
          onChange={onChange(type)}
        />
      ))}
    </>
  );
};

const GuestRoomPicker = ({ people = 0, rooms = [], handleDistribution }) => {
  const [distribution, setDistribution] = useState(
    rooms.map(() => ({
      [GUEST_TYPE.ADULT]: 0,
      [GUEST_TYPE.CHILD]: 0,
    }))
  );

  const handleChange = (i) => (type) => (newValue) => {
    setDistribution((dist) => [
      ...dist.slice(0, i),
      {
        ...dist[i],
        [type]: newValue,
      },
      ...dist.slice(i + 1),
    ]);
  };

  useEffect(() => {
    handleDistribution(distribution);
  }, [distribution]);

  return (
    <div styleName="guest-room-picker-container">
      <div styleName="title">
        住客人數：{people} 人 / {rooms.length} 房
      </div>
      {rooms.map((room, i) => (
        <div key={i}>
          <Room
            room={room}
            distribution={distribution[i]}
            onChange={handleChange(i)}
          />
          {i < rooms.length - 1 && <hr className="solid" styleName="divider" />}
        </div>
      ))}
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
