import React, { FC, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useQuery } from "react-query";
import { ClapSpinner } from "react-spinners-kit";
import { API_HOST } from "../config";
import splitWordAndPos from "../util/splitWordAndPos";

interface SenseAutosuggestProps {
  sense: string | null;
  onChange: (sense: string | null) => void;
}

interface AutocompleteResult {
  freq: number;
  term: string;
  senses: {
    pos: string;
    freq: number;
  }[];
}

const SenseAutosuggest: FC<SenseAutosuggestProps> = ({ sense, onChange }) => {
  const [term, setTerm] = useState(sense ? splitWordAndPos(sense).word : "");
  const [query, setQuery] = useState<string | null>(null);
  const { isLoading, error, data } = useQuery<AutocompleteResult[]>(
    `autocomplete-${query}`,
    () =>
      !query
        ? []
        : fetch(
            `${API_HOST}/autocomplete?query=${encodeURIComponent(query)}`
          ).then((res) => res.json())
  );

  return (
    <div>
      <div className="flex">
        <Autosuggest
          suggestions={data ?? []}
          onSuggestionsFetchRequested={({ value }) => setQuery(value)}
          onSuggestionsClearRequested={() => setQuery(null)}
          inputProps={{
            value: term,
            onChange: (_evt, { newValue }) => setTerm(newValue),
          }}
          renderSuggestion={(suggestion) => <span>{suggestion.term}</span>}
          getSuggestionValue={(suggestion) => suggestion.term}
          theme={{
            input:
              "border border-gray-200 focus:border-blue-500 ring-0 outline-none p-1 px-2 rounded",
            suggestionsContainer: "relative",
            suggestionsList: "absolute bg-white border left-0 right-0",
            suggestionHighlighted: "bg-blue-200",
            suggestion: "p-1 text-sm",
          }}
        />
        <div className="p-2">
          {<ClapSpinner frontColor="#3B82F6" size={20} loading={isLoading} />}
        </div>
      </div>
      {error && <span className="text-red">Error: {error}</span>}
    </div>
  );
};

export default SenseAutosuggest;
