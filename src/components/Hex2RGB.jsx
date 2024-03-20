import {useState} from "react";

export default function Hex2RGB() {

  const [hex, setHex] = useState('#ff0000')
  const [rgb, setRGB] = useState('')

  const divStyle = {
    background: hex
  }

  const hexToRgb = (input) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  const handleHexChange = e => {
    if(hexToRgb(e.target.value)) {
        setHex(e.target.value)
        setRGB(`rgb(${hexToRgb(e.target.value).r}, ${hexToRgb(e.target.value).g}, ${hexToRgb(e.target.value).b})`)
    } else {
      setHex('#ff0000')
      setRGB('Ошибка')
    }

  }

  return (
    <div className="wrapper" style={divStyle} data-testid="test">
      <div className="wrapper--inner">
        <input type="text" id="input" onChange={handleHexChange} />
        <div className="rbgValue">{rgb}</div>
      </div>
    </div>
  );
}
