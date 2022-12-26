import {
  BsBoxArrowUpRight,
  BsBuilding,
  BsFillPeopleFill,
  BsGithub,
} from "react-icons/bs";
import womanImg from "../../../../assets/woman.jpeg"

export function Profile() {
  return (
    <section>
      <aside className="home-profile-image">
        <img src={womanImg} alt="user image" />
      </aside>

      <aside className="home-profile-info">
        <div className="home-profile-info-name">
          <h6>Cameron Williamson</h6>

          <div>
            <span>GITHUB</span>
            <BsBoxArrowUpRight />
          </div>
        </div>

        <p className="home-profile-about">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="home-profile-location">
          <span className="home-profile-location-item">
            <BsGithub />
            cameronwll
          </span>

          <span className="home-profile-location-item">
            <BsBuilding />
            Rocketseat
          </span>

          <span className="home-profile-location-item">
            <BsFillPeopleFill />
            32 seguidores
          </span>
        </div>
      </aside>
    </section>
  );
}
