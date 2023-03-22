/* eslint-disable @next/next/no-img-element */
import GET_BLEND_TYPES from "@/app/api/graphql/catagory/query/getBlendType";
import GET_ALL_PLANS from "@/app/api/graphql/plan/query/getAllPlans";
import GET_ALL_LATEST_RECIPES from "@/app/api/graphql/recipe/getAllLatestRecipes";
import GET_WIKI_HIGHLIGHTS from "@/app/api/graphql/wiki/query/getWikiHighlights";
import RECIPE_CATEGORY_COLOR from "@/app/constants/recipeCategoryColor";
import { useAppDispatch } from "@/app/redux/hooks";
import { updateSidebarActiveMenuName } from "@/app/redux/slices/mainSideBarSlice";
import { mainSidebarActiveMenuNameType } from "@/app/types/mainSideBarActiveMenuType";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import HomePageRecipeCard from "../../elements/homePageRecipeCard/HomePageRecipeCard";
import PageContainer from "../../layouts/pageContainer";
import { PAGES } from "../../modules/mainSideBar";
import SliderWithContent from "../../modules/sliderWithContent/SiderWithContent";
import styles from "./homePage.module.scss";
import { BsClock } from "react-icons/bs";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: recipes } = useQuery(GET_ALL_LATEST_RECIPES, {
    variables: { userId: "61c1e18ab0b6d08ad8f7484f" },
  });
  const { data: plans } = useQuery(GET_ALL_PLANS, {
    variables: { limit: 8, page: 1, memberId: "61c1e18ab0b6d08ad8f7484f" },
  });
  const { data: wikis } = useQuery(GET_WIKI_HIGHLIGHTS);
  const { data: blendTypes } = useQuery(GET_BLEND_TYPES);

  const handleToRoutePage = (
    route: string,
    menuName: mainSidebarActiveMenuNameType
  ) => {
    dispatch(updateSidebarActiveMenuName(menuName));
    router.push(route);
  };

  return (
    <PageContainer>
      <section className={styles.homePageContainer}>
        <main>
          <div className={styles.alert}>
            <div className={styles.alert__content}>
              <h3>Hello</h3>
              <p>
                You have current blending score is{" "}
                <span className="bold text-green">85%</span>. Did you know
                people who log their meals daily lose twice as weight as those
                who don&apos;t? Check out &quot;
                <span className="text-orange bold">
                  Food Logging like a Pro!
                </span>
                &quot;. It could help take your blending score to the next
                level.
              </p>
            </div>
            <div className={styles.alert__image}>
              <h3>Food logging like a Pro!</h3>
              <img src="/images/smoothie.webp" alt="banner" />
            </div>
          </div>

          {/* quick link  */}

          <div className={styles.quick}>
            <div className={styles.quick__site}>
              <h3>Explore Site</h3>
              <div>
                {PAGES &&
                  PAGES.map((page, idx) =>
                    idx !== 0 ? (
                      <a
                        key={page.content}
                        onClick={() =>
                          handleToRoutePage(page.link, page.content)
                        }
                      >
                        <img src={page.logo} alt={page.content} />
                        <h6>{page.content}</h6>
                      </a>
                    ) : (
                      <></>
                    )
                  )}
              </div>
            </div>
            <div className={styles.quick__category}>
              <h3>Explore Blend Types</h3>
              <div>
                {blendTypes?.getAllCategories &&
                  blendTypes?.getAllCategories.map((type: any) => (
                    <a
                      key={type._id}
                      // href={type._id}
                      // passHref
                      // onClick={() =>
                      //   handleToShowBlendTypes({
                      //     name: type?.name,
                      //     image: type?.image || defaultBlendImg,
                      //     id: type?._id,
                      //     tagLabel: "",
                      //     filterCriteria: "blendTypes",
                      //     origin: {
                      //       activeSection: "visual",
                      //       filterCriteria: "blendTypes",
                      //       activeTab: "Blend Type",
                      //       childTab: type?.name || "",
                      //     },
                      //   })
                      // }
                    >
                      <img src={type.image} alt={type.name} />
                      <span
                        style={{
                          backgroundColor:
                            //@ts-ignore
                            RECIPE_CATEGORY_COLOR[type.name],
                        }}
                      />
                      <h6>{type.name}</h6>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* ******** RECENT RECIPE LIST ******** */}
          <div className={styles.sectionDivider}>
            <SliderWithContent
              heading="Recent Recipes"
              image={<BsClock color="#fe5d1f" size={"3rem"} />}
              allUrl="/discovery"
            >
              {recipes?.getAllLatestRecipes2?.map((recipe: any) => {
                const {
                  recipeId: {
                    _id = "",
                    name = "",
                    image = "",
                    numberOfRating = 0,
                    averageRating = 0,
                  },
                } = recipe;
                return (
                  <div style={{ paddingRight: "1rem" }} key={_id}>
                    <HomePageRecipeCard
                      title={name}
                      img={image?.[0]?.image}
                      rating={averageRating}
                      noOfRating={numberOfRating}
                    />
                  </div>
                );
              })}
            </SliderWithContent>
          </div>
        </main>
        <aside>side</aside>
      </section>
    </PageContainer>
  );
};

export default HomePage;
