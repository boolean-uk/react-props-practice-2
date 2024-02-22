import { useState } from "react";

function Title() {
  const [user] = useState("Nicolas");

  return <h1>Welcome, {user}!</h1>;
}

export default Title;
