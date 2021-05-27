# -- download Sense2Vec reddit data --
FROM alpine:3.13.5 AS downloader
RUN apk update && apk upgrade && apk add wget gzip tar
# Create data download directory
WORKDIR /data
RUN \
  wget -q https://github.com/explosion/sense2vec/releases/download/v1.0.0/s2v_reddit_2019_lg.tar.gz.001 && \
  wget -q https://github.com/explosion/sense2vec/releases/download/v1.0.0/s2v_reddit_2019_lg.tar.gz.002 && \
  wget -q https://github.com/explosion/sense2vec/releases/download/v1.0.0/s2v_reddit_2019_lg.tar.gz.003 && \
  cat s2v_reddit_2019_lg.tar.gz.* > s2v_reddit_2019_lg.tar.gz && \
  rm s2v_reddit_2019_lg.tar.gz.* && \
  tar -xvzpf s2v_reddit_2019_lg.tar.gz && \
  rm s2v_reddit_2019_lg.tar.gz

# -- install python deps --
# based on https://pythonspeed.com/articles/activate-conda-dockerfile/
FROM continuumio/miniconda3 as base
COPY environment.yml .
RUN conda env create -f environment.yml
# Make RUN commands use the new environment:
RUN echo "conda activate reddit_words" >> ~/.bashrc
SHELL ["/bin/bash", "--login", "-c"]
WORKDIR /app
COPY . .

# -- created pruned sense vectors --
FROM base as precalculator
COPY --from=downloader /data/s2v_reddit_2019_lg /data/s2v_reddit_2019_lg
RUN python scripts/prune_sense_vectors.py --spacy-sense2vec-path /data/s2v_reddit_2019_lg


# -- build final image --
FROM base as release
COPY --from=precalculator /app/data /app/data
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 main:app
