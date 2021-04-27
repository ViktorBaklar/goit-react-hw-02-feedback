import style from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <ul className={style.statistics} >
    <li>Good: {good} </li>
    <li>Neutral: {neutral} </li>
    <li>Bad: {bad} </li>
    <li>Total: {total} </li>
    <li>Positive feedback: {positive}%</li>
  </ul >
)


export default Statistics;