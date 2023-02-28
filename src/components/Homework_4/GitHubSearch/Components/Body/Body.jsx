import React, { useEffect } from "react";
import style from "./Body.module.scss";
import {
  BsFillGeoAltFill,
  BsTwitter,
  BsLink45Deg,
  BsBuilding,
} from "react-icons/bs";

export default function Body({ data }) {
  const {
    avatar_url,
    bio,
    blog,
    company,
    updated_at,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    public_repos,
    twitter_username,
  } = data;

  const date = new Date(updated_at).toString().slice(0, 21);

  return (
    <div className={style.Body}>
      <div className={style.Body_Wrapper}>
        <div className={style.Body_Image}>
          <img src={avatar_url} alt="User Avatar" />
        </div>
        <div className={style.Body_Info}>
          <div className={style.Body_Info_Row}>
            <div className={style.Body_Info_Name}>{name}</div>
            <div className={style.Body_Info_Date}>{date}</div>
          </div>
          <div className={style.Body_Nickname}>
            <a href={html_url} className={style.Body_Link} target="_blank">
              @{login}
            </a>
          </div>
          <div className={style.Body_Status}>{bio}</div>
          <div className={style.Body_Follow}>
            <div className={style.Follow_Info}>
              <div className={style.Follow_Title}>Repos</div>
              <div className={style.Follow_Count}>{public_repos}</div>
            </div>
            <div className={style.Follow_Info}>
              <div className={style.Follow_Title}>Followers</div>
              <div className={style.Follow_Count}>{followers}</div>
            </div>
            <div className={style.Follow_Info}>
              <div className={style.Follow_Title}>Following</div>
              <div className={style.Follow_Count}>{following}</div>
            </div>
          </div>
          <div className={style.Body_Contact}>
            <div className={style.Contact_Block}>
              <span className={style.Contact_Icon}>
                <BsFillGeoAltFill size="20px" />
              </span>
              <p className={style.Contact_Text}>
                {location ? location : "Not Available"}
              </p>
            </div>
            <div className={style.Contact_Block}>
              <span className={style.Contact_Icon}>
                <BsTwitter size="20px" />
              </span>
              <p className={style.Contact_Text}>
                {twitter_username ? twitter_username : "Not Available"}
              </p>
            </div>
            <div className={style.Contact_Block}>
              <span className={style.Contact_Icon}>
                <BsLink45Deg size="20px" />
              </span>
              <p className={style.Contact_Text}>
                <a className={style.Body_Link} href={blog ? blog : ""}>
                  {blog ? blog : "Not Available"}
                </a>
              </p>
            </div>
            <div className={style.Contact_Block}>
              <span className={style.Contact_Icon}>
                <BsBuilding size="20px" />
              </span>
              <p className={style.Contact_Text}>
                {company ? company : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
