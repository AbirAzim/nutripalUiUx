/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";
import styles from "./MainNavigationBar.module.scss";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdHelpOutline,
  MdOutlineLogout,
  MdOutlineLogin,
  MdPublishedWithChanges,
} from "react-icons/md";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import useOnClickOutside from "@/app/hooks/common/useOnClickOutside";
import SocialIconsComponent from "./SocialIconsComponent";
import LocalMallIcon from "../../../../public/icons/local_mall_black_36dp.svg";

interface headerInterface {
  logo: Boolean;
  headerTitle: string;
  fullWidth?: Boolean;
  headerIcon?: string | React.ReactNode;
}

function MainNavigationBar({
  logo = true,
  headerTitle = "Home",
  fullWidth,
  headerIcon = "",
}: headerInterface) {
  const [openPopup, setOpenPopup] = useState(false);
  const userMenu = useRef(null);
  const userIcon = useRef(null);
  useOnClickOutside(userMenu, () => setOpenPopup(false));

  const style = fullWidth ? { width: "100%" } : {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} style={style}>
        <div className={styles.header__inner}>
          <Link href="/" passHref>
            <div className={styles.left + " " + styles.logo}>
              {logo && <img src="logo/logo.png" alt="logo" />}
            </div>
          </Link>
          <div className={styles.center}>
            {headerIcon ? (
              typeof headerIcon === "string" ? (
                <img src={headerIcon} alt="icon" />
              ) : (
                headerIcon
              )
            ) : null}
            <h2 className={styles.title}>{headerTitle}</h2>
          </div>
          <div className={styles.right + " " + styles.logo}>
            <div>
              <SocialIconsComponent />
            </div>
            <div>{/* <LocalMallIcon className={styles.cart__icon} /> */}</div>
            <div className={styles.userPopupMenu} ref={userMenu}>
              <div className={styles.arrowWithText} ref={userIcon}>
                <FaRegUser
                  className={styles.userName__image}
                  onClick={() => setOpenPopup((pre) => !pre)}
                />
                {/* {user ? (
                  <div className={styles.userName}>
                    {dbUser?.image ? (
                      <Image
                        src={dbUser?.image}
                        alt="prfile.png"
                        objectFit="cover"
                        layout="fill"
                        onClick={() => setOpenPopup((pre) => !pre)}
                      />
                    ) : (
                      <FaRegUser
                        className={styles.userName__image}
                        onClick={() => setOpenPopup((pre) => !pre)}
                      />
                    )}
                  </div>
                ) : null} */}
              </div>

              {openPopup ? (
                <div className={`${styles.popup}`}>
                  <Link href="/user/?type=about" passHref>
                    <div className={styles.menu}>
                      <p>My Profile</p>
                      <HiOutlineUserCircle className={styles.icon} />
                    </div>
                  </Link>
                  <div className={styles.menu}>
                    <p>Admin</p>
                    <MdOutlineAdminPanelSettings className={styles.icon} />
                  </div>
                  <div className={styles.menu}>
                    <p>Help</p>
                    <MdHelpOutline className={styles.icon} />
                  </div>
                  {/* {user ? (
                    <>
                      <Link href="/reset_password" passHref>
                        <div className={styles.menu}>
                          <p>Change Pass.</p>
                          <MdPublishedWithChanges className={styles.icon} />
                        </div>
                      </Link>
                      <div className={styles.menu} onClick={userSingOut}>
                        <p>Logout</p>
                        <MdOutlineLogout className={styles.icon} />
                      </div>
                    </>
                  ) : (
                    <Link href="/login" passHref>
                      <div className={styles.menu}>
                        <p>Login</p>
                        <MdOutlineLogin className={styles.icon} />
                      </div>
                    </Link>
                  )} */}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationBar;
