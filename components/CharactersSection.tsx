"use client";

import React from "react";
import { CharacterAxiosResponse, Result } from "@/types/character";
import CharacterCart from "./CharacterCart";

interface CharactersSectionProps {
  charactersData: Result[];
  innerRef?: (node: HTMLDivElement | undefined) => void;
}

const CharactersSection = ({
  charactersData,
  innerRef,
}: CharactersSectionProps) => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-[80%] flex flex-row flex-wrap items-center justify-center">
        {charactersData.map((character, index) => (
          <div key={character.id}>
            <CharacterCart
              id={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
              status={character.status}
              species={character.species}
              location={character.location.name}
              innerRef={innerRef}
              isLast={charactersData.length === index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersSection;
