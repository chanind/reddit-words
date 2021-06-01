import React from "react";
import SenseDiffLink from "../components/SenseDiffLink";

const IntroPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-6xl p-10">Reddit Words</h1>
      <p>
        What did{" "}
        <a href="https://github.com/explosion/sense2vec" className="underline">
          Spacy's sense2vec
        </a>{" "}
        word vectors learn about the world from Reddit in 2019? Click on a
        dimension below to find out!
      </p>
      <div className="flex flex-wrap justify-center pt-10 gap-3">
        <SenseDiffLink
          leftSense="Communism|NOUN"
          rightSense="Capitalism|NOUN"
        />
        <SenseDiffLink leftSense="tall|ADJ" rightSense="short|ADJ" />
        <SenseDiffLink leftSense="east|NOUN" rightSense="west|NOUN" />
        <SenseDiffLink leftSense="north|NOUN" rightSense="south|NOUN" />
        <SenseDiffLink leftSense="USA|GPE" rightSense="France|GPE" />
        <SenseDiffLink leftSense="USA|GPE" rightSense="China|GPE" />
        <SenseDiffLink leftSense="smart|ADJ" rightSense="stupid|ADJ" />
        <SenseDiffLink leftSense="Tokyo|GPE" rightSense="New_York|GPE" />
        <SenseDiffLink leftSense="happy|ADJ" rightSense="unhappy|ADJ" />
        <SenseDiffLink
          leftSense="homosexual|ADJ"
          rightSense="heterosexual|ADJ"
        />
      </div>
    </div>
  );
};

export default IntroPage;
