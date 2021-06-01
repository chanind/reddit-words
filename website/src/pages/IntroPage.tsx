import React from "react";
import SenseDiffLink from "../components/SenseDiffLink";

const IntroPage = () => {
  return (
    <div>
      <h1 className="text-6xl p-10">Reddit Words</h1>
      <p>What did NLP word sense vectors learn from Reddit in 2019?</p>
      <div className="grid grid-flow-col auto-cols-max justify-center pt-10 gap-3">
        <SenseDiffLink
          leftSense="Communism|NOUN"
          rightSense="Capitalism|NOUN"
        />
        <SenseDiffLink leftSense="big|ADJ" rightSense="small|ADJ" />
        <SenseDiffLink leftSense="tall|ADJ" rightSense="short|ADJ" />
      </div>
    </div>
  );
};

export default IntroPage;
