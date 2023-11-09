import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="w-screen h-screen bg-hero-pattern">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="me m-auto w-36 h-36 max-sm:w-24 max-sm:h-24 rounded-full mb-0"></div>
        <div className="flex flex-col justify-center items-center w-1/2 max-sm:w-full max-sm:pr-5 max-sm:pl-5 m-auto mt-0">
          <h2 className=" text-2xl leading-10 font-bold max-sm:leading-8 max-sm:text-xl">
            TCHUEGNO PATRICIA
          </h2>
          <h3 className="font-bold leading-8 text-xl md:text-center max-sm:leading-5 max-sm:text-lg max-lg:text-center">
            Web Frontend and Founder of The Rootines Hair Care
          </h3>

          <p className="text-center text-gray-600 text-base">
            I'm young christian, enthousiast woman passionated about
            programming, data and marketing. I'm currently working at EJARA
            Central Africa as a web Frontend Developer. I'm a lover of the
            african culture, especially the african hair, i decided years ago to
            focus on how to take care of african hair without damaging our
            health and while using our natural ressources.Therefore, i created
            The Rootines Hair Care which is the brand that will make you feel
            more confident and proud wearing your natural hair, which will make
            you having a particular relationship with your hair, which all will
            lead to Reveal Who You really Are!
          </p>

          <div className="flex row gap-4 mt-4">
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
