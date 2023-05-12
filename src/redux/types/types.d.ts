type Origin = {
  name: string;
  url: string;
};

export default interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  image: string;
  episodes: string[];
}
