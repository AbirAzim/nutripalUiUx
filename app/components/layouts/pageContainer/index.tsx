import React, { FC } from "react";
import MainFooter from "../../modules/mainFooter";
import MainNavigationBar from "../../modules/mainNavigationBar";
import MainSideBar from "../../modules/mainSideBar";
import styles from "./pageContainer.module.scss";

interface ShowTray {
  show: boolean;
  showTagByDeafult?: boolean;
  showPanle?: "left" | "right";
}

type AContainerProps = {
  showHeader?: boolean;
  showSidebar?: boolean;
  showCollectionTray?: ShowTray;
  showVersionTray?: ShowTray;
  showGroceryTray?: ShowTray;
  showCommentsTray?: ShowTray;
  showWikiCommentsTray?: ShowTray;
  showBlogCommentsTray?: ShowTray;
  showBlogCollectionTray?: ShowTray;
  showPlanCollectionTray?: ShowTray;
  showRecipeFilterTray?: ShowTray;
  logo?: boolean;
  headerTitle?: string;
  headerIcon?: string | React.ReactNode;
  children: React.ReactNode;
  nutritionTray?: Boolean;
  healthTray?: Boolean;
  ingredientTray?: Boolean;
  headerFullWidth?: Boolean;
};

const PageContainer: FC<AContainerProps> = (props) => {
  const {
    headerIcon = "",
    showHeader = true,
    showSidebar = true,
    showCollectionTray = {
      show: false,
      showTagByDeafult: true,
      showPanle: "left",
    },
    showVersionTray = {
      show: false,
      showTagByDeafult: true,
      showPanle: "right",
    },
    showGroceryTray = {
      show: false,
      showTagByDeafult: true,
      showPanle: "right",
    },
    showCommentsTray = {
      show: false,
      showTagByDeafult: true,
      showPanle: "right",
    },
    showWikiCommentsTray = {
      show: false,
      showTagByDeafult: false,
      showPanle: "right",
    },
    showBlogCommentsTray = {
      show: false,
      showTagByDeafult: false,
      showPanle: "right",
    },
    showBlogCollectionTray = {
      show: false,
      showTagByDeafult: false,
      showPanle: "left",
    },
    showPlanCollectionTray = {
      show: false,
      showTagByDeafult: false,
      showPanle: "left",
    },
    showRecipeFilterTray = {
      show: false,
      showPanle: "left",
      showTagByDeafult: false,
    },
    logo = true,
    headerTitle = "",
    nutritionTray = false,
    healthTray = false,
    ingredientTray = false,
    headerFullWidth = false,
  } = props;

  return (
    <div className={styles.containerA}>
      {showSidebar ? (
        <div className={styles.sidebarA}>
          <MainSideBar />
        </div>
      ) : null}
      <div
        className={styles.mainA}
        style={headerFullWidth ? { width: "100%" } : {}}
      >
        {showHeader ? (
          <MainNavigationBar
            logo={logo}
            headerTitle={headerTitle}
            fullWidth={headerFullWidth}
            headerIcon={headerIcon}
          />
        ) : null}

        {props?.children}
        <MainFooter />
      </div>
    </div>
  );
};

export default PageContainer;
