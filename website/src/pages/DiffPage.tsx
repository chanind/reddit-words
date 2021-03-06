import React from "react";
import { Link } from "react-router-dom";
import splitWordAndPos from "../util/splitWordAndPos";
import useQueryParams from "../util/useQueryParams";
import { API_HOST } from "../config";
import { useQuery } from "react-query";
import "./DiffPage.css";
import { ClapSpinner } from "react-spinners-kit";

const DiffPage = () => {
  const query = useQueryParams();
  const left = query.get("left");
  const right = query.get("right");
  const { isLoading, error, data } = useQuery<BiasQueryResults>(
    `${left}-${right}`,
    () =>
      fetch(`${API_HOST}/bias-rank?leftSense=${left}&rightSense=${right}`).then(
        (res) => res.json()
      )
  );

  interface BiasQueryResults {
    topLeftSenses: [string, number][];
    topRightSenses: [string, number][];
  }

  return (
    <div>
      <div className="my-5 mx-3 md:mx-10 md:mb-10 relative">
        <Link to="/" className="DiffPage-backLink left-0 absolute top-0">
          <span className="DiffPage-backLinkArrow">←</span> back
        </Link>
        <Link to="/" className="text-2xl">
          Reddit Words
        </Link>
      </div>

      {left && right ? (
        <>
          <div className="text-4xl flex justify-center gap-1">
            <div>
              <span className="pr-2">{splitWordAndPos(left).word}</span>
              <span className="text-gray-400 text-xl hidden md:inline">
                {splitWordAndPos(left).pos}
              </span>
            </div>
            <div className="px-2">&minus;</div>
            <div>
              <span className="pr-2">{splitWordAndPos(right).word}</span>
              <span className="text-gray-400 text-xl hidden md:inline">
                {splitWordAndPos(right).pos}
              </span>
            </div>
          </div>
          {error && (
            <div className="my-7 p-3 rounded border border-red-500 text-red-400 inline-block">
              ⚠ {(error as any).message}
            </div>
          )}
          {isLoading && (
            <div className="flex justify-center mt-10">
              <ClapSpinner frontColor="#3B82F6" />
            </div>
          )}
          {data && (
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
              <div>
                <h1 className="py-5 text-xl">
                  ← <span className="hidden md:inline">towards</span>{" "}
                  <b>{splitWordAndPos(left).word}</b>
                </h1>
                <div>
                  {data.topLeftSenses.map(([sense]) => (
                    <div className="text-gray-300 pb-1">
                      {splitWordAndPos(sense).word}
                      <span className="text-gray-400 pl-1 text-sm hidden md:inline">
                        {splitWordAndPos(sense).pos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="py-5 text-xl">
                  <span className="hidden md:inline">towards</span>{" "}
                  <b>{splitWordAndPos(right).word}</b> →
                </h1>
                <div>
                  {data.topRightSenses.map(([sense]) => (
                    <div className="text-gray-300 pb-1">
                      {splitWordAndPos(sense).word}
                      <span className="text-gray-400 pl-1 text-sm hidden md:inline">
                        {splitWordAndPos(sense).pos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-4xl">Oh no! Page not found :'(</div>
      )}
    </div>
  );
};

export default DiffPage;
