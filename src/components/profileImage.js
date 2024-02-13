import React from "react";

// ProfileImage component receives 'name' and 'available' as props
const ProfileImage = ({ name, available }) => {
  // Splitting the name into parts using space
  const nameParts = name.split("");

  // Extracting the first initial from the first part of the name
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  
  // Extracting the first initial from the second part of the name
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  // Rendering the ProfileImage component
  return (
    <div>
      {/* Displaying the user profile image with first and last name initials */}
      <span style={{ color: '#ffffff' }} className="user-profile-image">
        {firstNameInitial}
        {lastNameInitial}
      </span>

      {/* Displaying an 'available' indicator if the 'available' prop is true */}
      {available && (
        <span className="available" style={{ fontSize: '2rem', color: '#ffc400' }}>•</span>
      )}
    </div>
  );
};

// Exporting the ProfileImage component
export default ProfileImage;
