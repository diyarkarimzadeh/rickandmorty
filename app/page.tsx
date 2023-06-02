"use client";

import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import { getCharacters } from "@/services/characters";
import { useEffect } from "react";
import { useState } from "react";
import CharactersSection from "@/components/CharactersSection";
import { useRef, useCallback } from "react";
import { Result } from "@/types/character";
import useDebounce from "@/hooks/useDebounce";

export default function Home() {
  const [charactersData, setCharactersData] = useState<Result[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>();
  const [loading, setLoading] = useState(true);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const debouncedSearchTerm = useDebounce(searchedText, 300);

  const observer = useRef<IntersectionObserver>();
  const lastElement = useCallback(
    (node: HTMLDivElement | undefined) => {
      if (paginateLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPaginateLoading(true);
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, paginateLoading]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(e.target.value);
  };

  useEffect(() => {
    if (page > 1) {
      getCharacters(searchedText, page)
        .then((data) => {
          setHasMore(data.data.results.length === 20);
          setCharactersData((prevCharacters: Result[]) => [
            ...prevCharacters,
            ...data.data.results.map((a) => a),
          ]);
          setPaginateLoading(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    getCharacters(searchedText, page)
      .then((data) => {
        setHasMore(data.data.results.length === 20);
        setCharactersData([]);
        setCharactersData(data.data.results);
        setLoading(false);
        setPaginateLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [debouncedSearchTerm]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-full h-[550px]">
        <MainSection />
      </div>
      {!loading ? (
        <div className="flex flex-col items-center mt-8">
          <input
            className="w-[300px] md:w-[420px] lg:w-[620px] h-[32px] py-6 px-4 rounded text-neutral-800"
            type="text"
            placeholder="Search characters by name"
            onChange={handleChange}
          />
          <CharactersSection
            charactersData={charactersData}
            innerRef={lastElement}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center my-8">
          <p>Loading...</p>
        </div>
      )}
      {paginateLoading && (
        <div className="flex items-center justify-center my-8">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
