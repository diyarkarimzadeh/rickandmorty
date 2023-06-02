"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { LegacyRef } from "react";

interface CharacterCartProps {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  location: string;
  innerRef?: (node: HTMLDivElement | undefined) => void;
  isLast?: boolean;
  //For Saved Page - To Update Character List on saved Page
  getSavedCharacters?: () => void;
}

enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  unknown = "unknown",
}

const CharacterCart = ({
  id,
  name,
  gender,
  image,
  status,
  species,
  location,
  innerRef,
  isLast,
  //For Saved Page - To Update Character List on saved Page
  getSavedCharacters,
}: CharacterCartProps) => {
  const [saved, setSaved] = useState(false);

  const saveCharacter = () => {
    if (localStorage.getItem("saved") === null) {
      let savedCharacters = [];
      const character = {
        id: id,
        name: name,
        gender: gender,
        image: image,
        status: status,
        species: species,
        location: location,
      };
      savedCharacters.push(character);
      localStorage.setItem("saved", JSON.stringify(savedCharacters));
      setSaved(true);
      //For Saved Page - To Update Character List on saved Page
      if (getSavedCharacters) {
        getSavedCharacters();
      }
    } else {
      let savedCharacters: Pick<
        CharacterCartProps,
        "id" | "name" | "gender" | "image" | "status" | "species" | "location"
      >[] = JSON.parse(localStorage.getItem("saved") as string);
      let isCharacterSavedBefore: boolean = false;
      savedCharacters.map((character, index) => {
        if (character.id === id) {
          isCharacterSavedBefore = true;
          savedCharacters.splice(index, 1);
          localStorage.setItem("saved", JSON.stringify(savedCharacters));
          setSaved(false);
          //For Saved Page - To Update Character List on saved Page
          if (getSavedCharacters) {
            getSavedCharacters();
          }
        }
      });
      if (!isCharacterSavedBefore) {
        const character = {
          id: id,
          name: name,
          gender: gender,
          image: image,
          status: status,
          species: species,
          location: location,
        };
        savedCharacters.push(character);
        localStorage.setItem("saved", JSON.stringify(savedCharacters));
        setSaved(true);
        //For Saved Page - To Update Character List on saved Page
        if (getSavedCharacters) {
          getSavedCharacters();
        }
      }
    }
  };

  const checkSavedCharacters = () => {
    if (localStorage.getItem("saved")) {
      let savedCharacters: Pick<
        CharacterCartProps,
        "id" | "name" | "gender" | "image" | "status" | "species" | "location"
      >[] = JSON.parse(localStorage.getItem("saved") as string);
      let filteredCharacters = savedCharacters.filter((character) => {
        return character.id === id;
      });
      if (filteredCharacters.length > 0) {
        setSaved(true);
      } else {
        setSaved(false);
      }
    }
  };

  useEffect(() => {
    checkSavedCharacters();
  }, []);

  return (
    <div>
      {isLast ? (
        <div
          ref={innerRef as LegacyRef<HTMLDivElement> | undefined}
          className="w-[350px] h-[220px] bg-neutral-900 m-4 p-4 rounded-lg relative"
        >
          <div className="flex items-center">
            <Image
              className="rounded-full mr-2"
              src={image}
              width={86}
              height={86}
              alt="hello"
            />
            <div>
              <p className="text-[20px]">{name}</p>
              <p>
                {status === CharacterStatus.Alive
                  ? `🟢${status}`
                  : status === CharacterStatus.Dead
                  ? `🔴${status}`
                  : `❓${status}`}
                - {species}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex">
              <p className="text-[14px]">
                🧬{gender} 📍{location}
              </p>
            </div>
          </div>
          <div
            onClick={saveCharacter}
            className="mt-4 flex bg-neutral-600 absolute bottom-3 left-4 p-2 rounded-full cursor-pointer items-center justify-center"
          >
            <Bookmark size={16} />
            {saved && <p className="ml-1 text-[12px]">Saved ✅</p>}
          </div>
        </div>
      ) : (
        <div className="w-[320px] h-[220px] bg-neutral-900 m-4 p-4 rounded-lg relative">
          <div className="flex items-center">
            <Image
              className="rounded-full mr-3"
              src={image}
              width={86}
              height={86}
              alt={name}
            />
            <div className="w-[100px]">
              <p className="text-[20px] w-[180px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                {name}
              </p>
              <p className="text-[14px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px]">
                {status === CharacterStatus.Alive
                  ? `🟢${status}`
                  : status === CharacterStatus.Dead
                  ? `🔴${status}`
                  : `❓${status}`}{" "}
                - {species}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex">
              <p className="text-[14px]">
                🧬{gender} 📍{location}
              </p>
            </div>
          </div>
          <div
            onClick={saveCharacter}
            className="mt-4 flex bg-neutral-600 absolute bottom-3 left-4 p-2 rounded-full cursor-pointer items-center justify-center"
          >
            <Bookmark size={16} />
            {saved ? <p className="ml-1 text-[12px]">Saved ✅</p> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCart;
