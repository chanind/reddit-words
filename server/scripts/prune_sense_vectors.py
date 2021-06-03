import argparse
from os import path
import re
import shutil
from sense2vec import Sense2Vec

parser = argparse.ArgumentParser(
    description="Remove malformed and infrequent data from the reddit sense vectors to reduce the data size"
)
parser.add_argument(
    "--spacy-sense2vec-path",
    help="location of the spacy sense2vec data needed for word similarity",
    required=True,
)
args = parser.parse_args()

OUTPUT_PATH = path.join(path.dirname(__file__), "../data")


def create_pruned_s2v(raw_s2v):
    keys_to_add = []
    bad_content_re = re.compile(r"/.*/|[+|^\[\]λ]")
    for key in raw_s2v.keys():
        word, sense = raw_s2v.split_key(key)
        freq = raw_s2v.get_freq(key)
        if (
            sense in ["AUX", "PUNCT", "NUM", "LAW", "X", "MONEY"]
            or freq < 1000
            or bad_content_re.search(word)
            or len(word) > 50
        ):
            continue
        keys_to_add.append(key)

    pruned_s2v = Sense2Vec(
        senses=raw_s2v.senses, shape=(len(keys_to_add), raw_s2v.vectors.shape[1])
    )
    for key in keys_to_add:
        freq = raw_s2v.get_freq(key)
        pruned_s2v.add(key, raw_s2v[key], freq)
    return pruned_s2v


def run():
    print("loading sense vectors")
    raw_s2v = Sense2Vec().from_disk(args.spacy_sense2vec_path)
    print("pruning vectors")
    pruned_s2v = create_pruned_s2v(raw_s2v)
    print(
        f"pruned sense vectors down to {len(pruned_s2v)} from {len(raw_s2v)} ({int(100 * len(pruned_s2v) / len(raw_s2v))}%)"
    )
    shutil.rmtree(OUTPUT_PATH, ignore_errors=True)
    pruned_s2v.to_disk(OUTPUT_PATH)


if __name__ == "__main__":
    run()
