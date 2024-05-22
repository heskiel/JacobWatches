import React from "react";
import { images } from "../actions/customFn";
import {
  Banner,
  FeaturedProperties,
  SubscribeEmail,
  TopDestination,
} from "../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <>
        home
        {/* <Banner />
        <TopDestination />
        <FeaturedProperties />
        <SubscribeEmail /> */}
      </>
    </motion.div>
  );
};

export default Home;
