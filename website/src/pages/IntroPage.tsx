import React from "react";
import SenseDiffLink from "../components/SenseDiffLink";
import Faq from "../components/Faq";

const IntroPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-6xl p-10">Reddit Words</h1>
      <p>
        What did{" "}
        <a href="https://github.com/explosion/sense2vec" className="underline">
          Spacy's offical sense2vec
        </a>{" "}
        word vectors learn about the world from Reddit in 2019? Click on a
        dimension below to find out!
      </p>
      <div className="flex flex-wrap justify-center pt-10 max-w-screen-lg mx-auto ">
        <div className="p-2">
          <SenseDiffLink
            leftSense="Communism|NOUN"
            rightSense="Capitalism|NOUN"
          />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="east|NOUN" rightSense="west|NOUN" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="north|NOUN" rightSense="south|NOUN" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="USA|GPE" rightSense="France|GPE" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="USA|GPE" rightSense="China|GPE" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="smart|ADJ" rightSense="stupid|ADJ" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="Tokyo|GPE" rightSense="New_York|GPE" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="happy|ADJ" rightSense="unhappy|ADJ" />
        </div>
        <div className="p-2">
          <SenseDiffLink leftSense="Trump|PERSON" rightSense="Obama|PERSON" />
        </div>
        <div className="p-2">
          <SenseDiffLink
            leftSense="North_Korea|GPE"
            rightSense="South_Korea|GPE"
          />
        </div>
      </div>
      <div className="pt-10 max-w-screen-lg mx-auto ">
        <Faq />
      </div>
    </div>
  );
};

export default IntroPage;
