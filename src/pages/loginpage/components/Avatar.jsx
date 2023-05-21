import React, { useState } from "react";
import { avatars } from "../../../helpers/avatars";
import "./Avatar.scss";

const defaultValue = "./default.svg";

export const Avatar = ({ getAvatar }) => {
  const [modal, setModal] = useState(true);
  const [avatarModal, setAvatarModal] = useState(defaultValue);

  const handleClick = (e) => {
    setAvatarModal(e.target.dataset.value);
    getAvatar(e.target.dataset.value);
    setModal(true);
  };
  const handleModal = () => {
    setModal(!modal);
  };

  const renderAvatars = avatars.map((avatar) => {
    return (
      <img
        className="avatar-img-modal"
        key={avatar}
        src={avatar ? avatar : defaultValue}
        data-value={avatar}
        onClick={handleClick}
      ></img>
    );
  });
  return (
    <>
      {modal ? (
        <div className="avatar-img-container">
          <img className="avatar-img-main" src={avatarModal}></img>
          <label className="button-container">
            <svg
              className="avatar-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_88)">
                <path d="M0 10C0 10.3315 0.131696 10.6495 0.366116 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25H8.54167C8.59692 11.25 8.64991 11.2719 8.68898 11.311C8.72805 11.3501 8.75 11.4031 8.75 11.4583V18.75C8.75 19.0815 8.8817 19.3995 9.11612 19.6339C9.35054 19.8683 9.66848 20 10 20C10.3315 20 10.6495 19.8683 10.8839 19.6339C11.1183 19.3995 11.25 19.0815 11.25 18.75V11.4583C11.25 11.4031 11.2719 11.3501 11.311 11.311C11.3501 11.2719 11.4031 11.25 11.4583 11.25H18.75C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75H11.4583C11.4031 8.75 11.3501 8.72805 11.311 8.68898C11.2719 8.64991 11.25 8.59692 11.25 8.54167V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366116C10.6495 0.131696 10.3315 0 10 0C9.66848 0 9.35054 0.131696 9.11612 0.366116C8.8817 0.600537 8.75 0.918479 8.75 1.25V8.54167C8.75 8.59692 8.72805 8.64991 8.68898 8.68898C8.64991 8.72805 8.59692 8.75 8.54167 8.75H1.25C0.918479 8.75 0.600537 8.8817 0.366116 9.11612C0.131696 9.35054 0 9.66848 0 10H0Z" />
              </g>
            </svg>
            <input
              className="avatar-button"
              type="checkbox"
              onChange={handleModal}
            />
          </label>
        </div>
      ) : (
        <div className="modal-backdrop" onClick={() => {
          setModal(true)
        }}>
          <div className="avatar-modal"> {renderAvatars} </div>
        </div>
      )}
    </>
  );
};
