import { useState } from 'react';

export default function HEXConvertor() {
  const [color, setColor] = useState('');

  const handleChange = ({ target }) => {
    if (target.value.length < 7) {
      return;
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
    if (result === null) {
      setColor('Ошибка!');
      return;
    }

    const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    setColor(`rgb(${rgb})`);
  }

  return (
    <div className="HEXConvertor" style={{ backgroundColor: color }}>
      <div className="HEXConvertor__container">
        <input className="HEXConvertor__input" onChange={handleChange} />
        <div className="HEXConvertor__result">{color}</div>
      </div>
    </div>
  );
}