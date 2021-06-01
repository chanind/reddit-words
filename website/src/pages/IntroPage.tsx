import React from "react";
import SenseDiffLink from "../components/SenseDiffLink";

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
      <div className="flex flex-wrap justify-center pt-10">
        <div className="p-3">
          <SenseDiffLink
            leftSense="Communism|NOUN"
            rightSense="Capitalism|NOUN"
          />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="east|NOUN" rightSense="west|NOUN" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="north|NOUN" rightSense="south|NOUN" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="USA|GPE" rightSense="France|GPE" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="USA|GPE" rightSense="China|GPE" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="smart|ADJ" rightSense="stupid|ADJ" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="Tokyo|GPE" rightSense="New_York|GPE" />
        </div>
        <div className="p-3">
          <SenseDiffLink leftSense="happy|ADJ" rightSense="unhappy|ADJ" />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
