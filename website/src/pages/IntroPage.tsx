import React, { useState } from "react";
import SenseDiffLink from "../components/SenseDiffLink";
import Faq from "../components/Faq";
import "./IntroPage.css";
import Modal from "../components/Modal";
import SenseAutosuggest from "../components/SenseAutosuggest";

const IntroPage = () => {
  const [isCreateOwnOpen, setIsCreateOwnOpen] = useState(false);
  return (
    <>
      <div className="p-2">
        <h1 className="text-6xl p-10">Reddit Words</h1>
        <p>
          What did{" "}
          <a
            href="https://github.com/explosion/sense2vec"
            className="underline"
          >
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
        <div className="my-10 mx-auto IntroPage-textDivider">
          <span className="bg-gray-800 px-2">or</span>
        </div>
        <div>
          <button
            onClick={() => setIsCreateOwnOpen(true)}
            className="p-3 px-10 rounded border border-blue-300 bg-opacity-5 bg-gray-400 hover:bg-opacity-10 text-blue-300"
          >
            Create your Own Dimension
          </button>
        </div>
        <div className="pt-10 max-w-screen-lg mx-auto ">
          <Faq />
        </div>
      </div>

      <Modal
        title="Create your Own Dimension"
        isOpen={isCreateOwnOpen}
        onClose={() => setIsCreateOwnOpen(false)}
      >
        <p className="text-gray-800">
          Choose 2 words to subtract to create an analysis dimension. It's best
          if these words are very similar in all ways except one, like
          "happiness" vs "unhappiness". The results will be words that are
          different in a similar way to the 2 words you select here.
        </p>
        <div className="flex mt-4 justify-between items-center">
          <div>
            <div className="text-xs mb-1">Left word</div>
            <SenseAutosuggest sense={null} onChange={console.log} />
          </div>
          <div className="px-3"> &minus; </div>
          <div>
            <div className="text-xs mb-1">Right word</div>
            <SenseAutosuggest sense={null} onChange={console.log} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default IntroPage;
