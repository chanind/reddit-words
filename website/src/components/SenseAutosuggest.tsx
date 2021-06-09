import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import Select, { components } from "react-select";
import { SearchIcon } from "@heroicons/react/outline";
import { API_HOST } from "../config";

interface SenseAutosuggestProps {
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

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <SearchIcon className="h-5 w-5" />
  </components.DropdownIndicator>
);

/**
 * Autosuggest dropdown for searching / autocompleting senses
 * This really should be a controlled component, but getting this to work as a controlled component with
 * react-select turns out to be a complete nightmare. It works for now uncontrolled, so, meh
 */
const SenseAutosuggest: FC<SenseAutosuggestProps> = ({ onChange }) => {
  const [query, setQuery] = useState<string>("");
  const [word, setWord] = useState<string | null>(null);
  const [pos, setPos] = useState<string | null>(null);
  const [allPos, setAllPos] = useState<string[] | null>(null);
  const { isLoading, error, data } = useQuery<AutocompleteResult[]>(
    `autocomplete-${query}`,
    () =>
      fetch(`${API_HOST}/autocomplete?query=${encodeURIComponent(query)}`).then(
        (res) => res.json()
      )
  );

  const onSelectSense = (suggestion: AutocompleteResult) => {
    setPos(suggestion.senses[0].pos);
    setWord(suggestion.term);
    setAllPos(suggestion.senses.map((sense) => sense.pos));
    const selectedSense = suggestion.term + "|" + suggestion.senses[0].pos;
    onChange(selectedSense);
  };

  const options = allPos
    ? allPos.map((curPos) => ({
        label: curPos,
        value: curPos,
      }))
    : null;

  return (
    <div>
      <div className="flex">
        <div style={{ minWidth: "200px" }}>
          <Select
            options={data?.map(({ term }) => ({ label: term, value: term }))}
            isLoading={isLoading}
            placeholder="Search..."
            components={{ DropdownIndicator }}
            onChange={(opt) => {
              setQuery(opt?.value ?? "");
              if (opt && data) {
                const selectedSense = data.find(
                  (res) => res.term === opt.value
                );
                if (selectedSense) onSelectSense(selectedSense);
              }
            }}
            onInputChange={(val, ...other) => {
              if (val !== "") {
                setQuery(val);
              } else if (word) {
                setQuery(word);
              }
            }}
            styles={{
              menu: (provided) => ({
                ...provided,
                display: query === "" ? "none" : "block",
              }),
            }}
          />
        </div>
        <div style={{ minWidth: "130px" }} className="pl-2">
          {options && (
            <Select
              options={options}
              value={options.find((option) => option.value === pos)}
              onChange={(opt) => setPos(opt ? opt.value : null)}
            />
          )}
        </div>
      </div>
      {error && <span className="text-red">Error: {error}</span>}
    </div>
  );
};

export default SenseAutosuggest;
