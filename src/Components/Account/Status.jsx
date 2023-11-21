import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
