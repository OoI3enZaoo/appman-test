import Color from 'color'
const base = {
    blue: 'deepskyblue',
    gray: '#f2edee',
    white: 'ghostwhite',
    red: 'red',
    gray2: '#242526',
    gray3: '#ccc'
}
export default {
  primary: base.blue,
  buttonHover: Color(base.blue).lighten(0.4).rgb().string(),
  borderGray: base.gray,
  placeholder: base.gray3,
  borderLogin: base.gray3,
  background: base.white,
  error: base.red,
  borderHover: base.gray2,
}
