import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import imageLoader from "../imageLoader";
import styles from "../styles/Home.module.css";
import { Character, GetCharacterResults } from "../type";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>create next app</title>
      </Head>

      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <a>
                <h3>{character.name}</h3>
              </a>
            </Link>
            <Image
              loader={imageLoader}
              src={character.image}
              alt={character.name}
              width="200"
              height="200"
            />
          </div>
        );
      })}
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
