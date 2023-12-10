import { useState } from "react";
import SignIn from "./SignIn page/SignIn";
import SignUp from "./SignUp page/SignUp";

const Status = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <SignIn />
      ) : (
        <SignUp
          onsucessFullSignUp={() => {
            setIsLoggedIn(true);
          }}
        />
      )}
    </>
  );
};

export default Status;
