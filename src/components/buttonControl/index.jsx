import Button from '../UI/button'
import style from './buttonControl.module.css'
import uniqueId from 'lodash/uniqueId';

const ButtonControl = ({ feedbackRange, onLeaveFeedback }) => (
  < ul className={style.buttonWrap} >
    {
      feedbackRange.map(range => {
        let id = uniqueId("prefix-")
        return <li key={id}><Button onClick={() => onLeaveFeedback(range)} >{range}</Button></li>

      })
    }
  </ul >
)
export default ButtonControl