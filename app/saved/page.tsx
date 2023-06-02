"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import CharacterCart from "@/components/CharacterCart";
import EmptyPage from "@/components/EmptyPage";

interface SavedCharactersProps {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  location: string;
}

const Saved = () => {
  const [savedCharacters, setSaveCharacters] = useState<SavedCharactersProps[]>(
    []
  );

  const getSavedCharacters = () => {
    if (localStorage.getItem("saved")) {
      let savedCharacters: SavedCharactersProps[] = JSON.parse(
        localStorage.getItem("saved") as string
      );
      setSaveCharacters(savedCharacters);
    }
  };

  useEffect(() => {
    getSavedCharacters();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[80%] flex flex-row flex-wrap items-center justify-center">
          {savedCharacters.length > 0 ? (
            savedCharacters.map((character) => (
              <CharacterCart
                key={character.id}
                id={character.id}
                name={character.name}
                gender={character.gender}
                image={character.image}
                status={character.status}
                species={character.species}
                location={character.location}
                isLast={false}
                getSavedCharacters={getSavedCharacters}
              />
            ))
          ) : (
            <EmptyPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Saved;
