/* eslint-disable @next/next/no-img-element */
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { updateSidebarActiveMenuName } from "@/app/redux/slices/mainSideBarSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Tooltip from "../../elements/toolTip/CustomToolTip";
import styles from "./mainSideBar.module.scss";

export type sidebarActiveMenuNameType =
  | "Home"
  | "Blends"
  | "Plans"
  | "Challenges"
  | "Wiki"
  | "Blogs"
  | "Shop";

export const PAGES: {
  logo: string;
  link: string;
  content: sidebarActiveMenuNameType;
}[] = [
  { logo: "/icons/home.svg", link: "/", content: "Home" },
  { logo: "/icons/juicer.svg", link: "/discovery", content: "Blends" },

  {
    logo: "/icons/calender__sidebar.svg",
    link: "/planner",
    content: "Plans",
  },
  {
    logo: "/icons/whistle.svg",
    link: "/challenge",
    content: "Challenges",
  },
  { logo: "/icons/books.svg", link: "/wiki", content: "Wiki" },
  { logo: "/icons/book_light.svg", link: "/blog", content: "Blogs" },
  { logo: "/icons/store.svg", link: "/", content: "Shop" },
];

export default function MainSideBar() {
  const { sidebarActiveMenuName } = useAppSelector(
    (state) => state.mainSideBar
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = (link: string, menuName: sidebarActiveMenuNameType) => {
    dispatch(updateSidebarActiveMenuName(menuName));
    router?.push(link);
  };

  return (
    <div className={styles.sidebar}>
      {/* <div className={styles.logo}>
        <Image src="/logo_small.svg" width={150} height={150} alt="logo" />
      </div> */}
      <ul className={styles.list}>
        {PAGES &&
          PAGES.map((page, i) => (
            <Tooltip key={"sidebaritem" + i} content={page?.content}>
              <li
                className={
                  sidebarActiveMenuName === page.content ? styles.active : ""
                }
                onClick={() => handleClick(page?.link, page?.content)}
              >
                <span>
                  {" "}
                  <img src={page.logo} alt={page.logo} />{" "}
                </span>
              </li>
            </Tooltip>
          ))}
      </ul>
    </div>
  );
}
