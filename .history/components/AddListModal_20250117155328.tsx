import React from "react";


export default function AddListModal() {
    return (


    );

}

ref.resetPassword({
  email: "bobtony@firebase.com",
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        break;
      default:
        console.log("Error resetting password:", error);
    }
  } else {
    console.log("Password reset email sent successfully!");
     // success
  }
  });
