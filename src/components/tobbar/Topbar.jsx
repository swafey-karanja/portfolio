import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Kswafey</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+254 795 171 281</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>Kswafey@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
