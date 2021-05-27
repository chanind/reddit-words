import faiss
import numpy as np


class VectorSearchIndex:
    "Index to efficiently search sense vectors by inner product using faiss"

    def __init__(self, s2v):
        self.index = faiss.IndexFlatIP(s2v.vectors.shape[1])
        self.index.add(s2v.vectors.data)
        # need to go from a row index in faiss back to the string hash index
        self.row2key = {val: key for key, val in s2v.vectors.key2row.items()}
        self.strings = s2v.strings

    def search(self, query_vec, max_results=100):
        """
        Search for the the top N results by inner product
        returns an array of tuples of (sense, similarity) for each result
        """
        similarities, indices = self.index.search(
            np.expand_dims(query_vec, axis=0), max_results
        )
        return [
            (self.row2string(index), float(similarity))
            for index, similarity in zip(indices[0], similarities[0])
        ]

    def row2string(self, row_num):
        row_id = self.row2key[row_num]
        return self.strings[row_id]
