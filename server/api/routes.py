from flask import Blueprint, request, jsonify
from os import path
from sense2vec import Sense2Vec
from lib.VectorSearchIndex import VectorSearchIndex

api = Blueprint("api", __name__)

s2v = Sense2Vec().from_disk(path.join(path.dirname(__file__), "../data"))
search_index = VectorSearchIndex(s2v)


@api.get("/")
def index():
    return "OK", 200


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
