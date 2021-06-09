import React, { FC } from "react";
import FaqItem from "./FaqItem";

const Faq: FC = () => (
  <div className="text-left">
    <div className="my-10">
      <FaqItem title="How does this work?">
        This works by subtracting 2 word vectors to determine a concept which
        represents the difference between those 2 words, and then finds the 100
        words in the dataset which have the maximum and minimum scores when
        projected along that concept dimension. For example, we can get at the
        concept of "happiness" by subtracting the word vector for "happy" and
        the word vector for "unhappy". Then, we can find the most and least
        "happy" words in the dataset by projecting the remaining word vectors
        along that "happiness" direction.
        <br />
        <br />
        This can be give insight in two ways. For words where the difference
        between the words is a clear concept, ex "happiness" = "happy" -
        "unhappy", the words listed are what Reddit has taught the sense vectors
        about the concept of "happiness". For words whose difference has a less
        obvious meaning, ex "Obama" - "Trump" = ?, looking at the listed words
        can give an idea of what the sense vectors trained on Reddit think the
        difference is between these 2 words.
      </FaqItem>
    </div>
    <div className="my-10">
      <FaqItem title="Where does this data come from?">
        The dataset used is{" "}
        <a
          className="underline"
          href="https://github.com/explosion/sense2vec#pretrained-vectors"
        >
          Spacy's official pretrained sense2vec sense vectors
        </a>{" "}
        trained on a dump of Reddit from 2019.{" "}
        <a className="underline" href="https://spacy.io/">
          Spacy
        </a>{" "}
        is one of the most popular NLP frameworks for Python.
      </FaqItem>
    </div>
    <div className="my-10">
      <FaqItem title="What are sense vectors, and what are they used for?">
        Sense vectors, or{" "}
        <a
          className="underline"
          href="https://en.wikipedia.org/wiki/Word_embedding"
          target="_blank"
          rel="noreferrer"
        >
          word vectors
        </a>
        , are a technique used to create numerical vectors from words. Sense
        vectors are just word vectors that also take into account part of speech
        of the word as well. These vectors capture features of words
        mathematically, so it's possible to use these pre-trained word vectors
        as an input to other AI models and have those models gain the insight
        that these vectors have already learned. However, these word vectors
        also learn the inherit biases and idiosyncracies of the data they were
        trained on, so it's important to be careful when using word vectors that
        you're not accidentally importing a lot of biases into your model. If
        you're using word vectors trained on Reddit data, for example, your
        model is going to have learned some pretty strange stuff!
      </FaqItem>
    </div>
    <div className="my-10">
      <FaqItem title="I have an idea to improve this project!">
        Contributions are always welcome! You can check out the code in the{" "}
        <a className="underline" href="https://github.com/chanind/reddit-words">
          reddit-words github repo
        </a>{" "}
        and open pull requests and issues there.
      </FaqItem>
    </div>
    <div className="my-10">
      <FaqItem title="Work with me!">
        I'm interested in doing a PhD in NLP in 2022, and would love to work
        with researchers doing NLP work in the meantime. Please reach out at{" "}
        <a className="underline" href="mailto:chanindav@gmail.com">
          chanindav@gmail.com
        </a>{" "}
        if you have a project I can be a part of.
      </FaqItem>
    </div>
  </div>
);

export default Faq;
