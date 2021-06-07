from flask import Blueprint, request, jsonify
from os import path
from sense2vec import Sense2Vec
from lib.AutocompleteIndex import AutocompleteIndex
from lib.VectorSearchIndex import VectorSearchIndex

api = Blueprint("api", __name__)

s2v = Sense2Vec().from_disk(path.join(path.dirname(__file__), "../data"))
search_index = VectorSearchIndex(s2v)
autocomplete_index = AutocompleteIndex(s2v)


@api.get("/")
def index():
    return "OK", 200


@api.get("/autocomplete")
def autocomplete():
    query = request.args.get("query")
    if query is None:
        return "Must provide a query", 400
    results = autocomplete_index.search(query)
    enhanced_results = []
    for result in results:
        best_sense = s2v.get_best_sense(result, ignore_case=False)
        other_senses = s2v.get_other_senses(best_sense, ignore_case=False)
        senses = [best_sense] + other_senses
        pos_with_freqs = [
            {"pos": s2v.split_key(sense)[1], "freq": s2v.get_freq(sense)}
            for sense in senses
        ]
        enhanced_results.append(
            {
                "term": result,
                "senses": sorted(
                    pos_with_freqs, key=lambda obj: obj["freq"], reverse=True
                ),
                "freq": s2v.get_freq(best_sense),
            }
        )
    return jsonify(enhanced_results)


@api.get("/bias-rank")
def bias_rank():
    """
    requires query params for leftSense, rightSense
    this will return to top 100 positive and negative extreme words matching this bias vector by dot product
    """
    left_sense = request.args.get("leftSense")
    right_sense = request.args.get("rightSense")
    if left_sense is None:
        return "Must provide a query param: leftSense", 400
    if right_sense is None:
        return "Must provide a query param: rightSense", 400
    left_sense_vec = s2v[left_sense]
    right_sense_vec = s2v[right_sense]
    if left_sense_vec is None:
        return f"{left_sense} not found", 400
    if right_sense_vec is None:
        return f"{right_sense} not found", 400
    bias_vec = right_sense_vec - left_sense_vec
    top_right_bias_senses = search_index.search(bias_vec, 100)
    top_left_bias_senses = search_index.search(-1 * bias_vec, 100)
    return jsonify(
        {
            "topLeftSenses": top_left_bias_senses,
            "topRightSenses": top_right_bias_senses,
        }
    )
