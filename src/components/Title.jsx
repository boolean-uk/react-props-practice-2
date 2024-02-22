import { useState } from "react";
function Title() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Nicolas");
  return <h1>Welcome, {user}!</h1>;
}

export default Title;
