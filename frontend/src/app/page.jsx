import SubscriptionBox from "@/components/SubscriptionBox";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import HomeBanner from "@/components/home/HomeBanner";
import HomeExperience from "@/components/home/HomeExperience";
import HomeMovieCategory from "@/components/home/HomeMovieCategory";
import AskedQuestion from "@/components/AskedQuestions";
import HomeTitle from "@/components/home/HomeTitle";

export default function Home() {
  return (
    <>

      <HomeBanner />

      <HomeTitle />

      <HomeMovieCategory />

      <HomeExperience />

      <AskedQuestion />

      <SubscriptionPlan />

      <SubscriptionBox />

    </>
  );
}
