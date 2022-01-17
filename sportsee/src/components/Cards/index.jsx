// import style from "./style.css"



export default function Card({image, value, type}) {
  return (
      <div>
          <img></img>
          <div> {value} </div>
          <div> {type} </div>
      </div>
  )
}