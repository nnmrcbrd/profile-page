import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Button from "./Button";

function Profile() {
  return (
    <div className="profile">
    <ProfilePicture /> 
    <div className="profile-info">
        <h2>Anna Marie G. Cabardo</h2>
        <h4>BSIT Student</h4>
    </div>
    <AboutMe />
    <Skills />
    <Button />
    </div>
  )
}

export default Profile;
