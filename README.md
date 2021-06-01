# reddit-words

What have Spacy's sense2vec 2019 word vectors learned from Reddit?

Live demo: [chanind.github.io/reddit-words](https://chanind.github.io/reddit-words)

## How does this work?

This project attempts to examine what the Spacy sense2vec Reddit word vectors have learned about words. This works by taking 2 words that differ in a single understandable dimension, like "east" vs "west", and subtracts them to get a direction vector. Then, this looks at the word vectors that have both the largest and smallest scores when projected along that direction.

## Project structure

This project contains 2 parts, a server written in Python which does the projection and ranking calculation, and a React web frontend which provides a UI to explore and navigate the data. The server is in the `server` directory, and the website is in the `website` directory.

## Contributing

If you have an idea to improve this project, pull requests are always welcome!

## Work with me!

I'm interested in doing a PhD in NLP in 2022, and would love to work with
researchers doing NLP work in the meantime. Please reach out at
<a href="mailto:chanindav@gmail.com">chanindav@gmail.com</a> if you have a
project I can be a part of!
