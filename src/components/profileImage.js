import React from "react";

// ProfileImage component takes two props: name and available
const ProfileImage = ({ name, available }) => {
  // Split the name into parts to extract initials
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  // Render the user profile image with initials
  return (
    <div>
      {/* Display the user profile image with initials */}
      <span style={{ color: '#ffffff' }} className="user-profile-image">
        {firstNameInitial}
        {lastNameInitial}
      </span>

      {/* Display an available indicator if available is true */}
      {available && (<span className="available" style={{ fontSize: '2rem', color: '#ffc400' }}>•</span>)}
    </div>
  );
};

export default ProfileImage;
