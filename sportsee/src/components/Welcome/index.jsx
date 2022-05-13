import "./style.css";

/**
 * Welcome component
 * @param {*} userName
 * @returns
 */
export default function Welcome(userName) {
  return (
    <div className="welcome">
      Bonjour <span className="welcome__name">{userName.userName}</span>
    </div>
  );
}
