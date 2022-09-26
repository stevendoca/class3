export interface GetCharacterResults {
  info: Info;
  results: Character[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
export interface Location {
  name: string;
  url: string;
}
export enum Gender {
  Male = "Male",
  Female = "Female",
  Unknow = "Unknow",
}
export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unkown = "Unknown",
}
export enum Species {
  Alien = "Alien",
  Human = "Human",
}
