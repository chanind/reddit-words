from collections import defaultdict
from collections import defaultdict
from fast_autocomplete import AutoComplete


class AutocompleteIndex:
    "Index to efficiently run autocomplete on words in the s2v vocab"

    def __init__(self, s2v):
        self.s2v = s2v
        words = {}
        for key in s2v.keys():
            key_parts = s2v.split_key(key)
            raw_word = key_parts[0]
            word = (
                raw_word.lower()
            )  # sadly the autocomplete library always lowercases. Need to match this here
            freq = s2v.get_freq(key)
            cur_freq = words[word]["count"] if word in words else 0
            words[word] = {"count": max(cur_freq, freq), "original_key": raw_word}
            if "hillary" in word.lower():
                print("OMG!!", word, words[word])
        self.index = AutoComplete(words=words)

    def search(self, term, max_results=10, max_cost=3):
        raw_results = self.index.search(term, size=max_results, max_cost=max_cost)
        # need to undo the lowercasing and collapsing that fast_autocomplete does, super annoying :/
        all_words = set()
        for res in raw_results:
            base_word = res[-1]
            # need to explicitly lower due to https://github.com/explosion/sense2vec/issues/138
            best_sense = self.s2v.get_best_sense(base_word.lower())
            if not best_sense:
                best_sense = self.s2v.get_best_sense(base_word)
            print(base_word, best_sense)
            all_words.add(self.s2v.split_key(best_sense)[0])
            for other_sense in self.s2v.get_other_senses(best_sense.lower()):
                all_words.add(self.s2v.split_key(other_sense)[0])
        return sorted(
            [word for word in all_words],
            key=lambda word: self.s2v.get_freq(
                self.s2v.get_best_sense(word, ignore_case=False)
            ),
            reverse=True,
        )[0:max_results]
