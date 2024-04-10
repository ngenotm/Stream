import SubscriptionBox from "@/components/SubscriptionBox";
import HomeBanner from "@/components/home/HomeBanner";
import HomeExperience from "@/components/home/HomeExperience";
import HomeMovieCategory from "@/components/home/HomeMovieCategory";
import HomePlan from "@/components/home/HomePlan";
import HomeQuestions from "@/components/home/HomeQuestions";
import HomeTitle from "@/components/home/HomeTitle";

export default function Home() {
  return (
    <>

      <HomeBanner />

      <HomeTitle />

      <HomeMovieCategory />

      <HomeExperience />

      <HomeQuestions />

      <HomePlan />

      <SubscriptionBox />

    </>
  );
}
