import { NextPage } from 'next';
import Discount from "@/Components/homepage/discount/Discount";
import Featured from "@/Components/homepage/featured/Featured";
import BannerPage from "@/Components/homepage/hero/Banner";
import Shopex from "@/Components/homepage/shopex/Shopex";
import { Subscribe } from "@/Components/homepage/subscribe/Subscribe";
import TopCategory from "@/Components/homepage/topcategory/Topcategory";
import Trending from "@/Components/homepage/trending/Trending";
import Unique from "@/Components/homepage/unique/Unique";
import Test from "@/Components/homepage/test/Test";
import Blog from "@/Components/homepage/blog/Blog";

const Home: NextPage = () => {
  return (
    <div>    
        <BannerPage/>
        <Featured/>
        <Test/>
        <Shopex/>
        <Unique/>
        <Trending/>
        <Discount/>
        <TopCategory/>
        <Subscribe/>
        <Blog/>
    </div>
  );
};

export default Home;