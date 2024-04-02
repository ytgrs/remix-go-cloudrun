import { useQuery, gql } from '@apollo/client';

const GET_POKEMON = gql`
  query GetPokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name
      type1
      type2
    }
  }
`;

interface Pokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
}

interface PokemonData {
  pokemon: Pokemon;
}

interface PokemonVars {
  id: number;
}

interface PokemonDetailProps {
  id: number;
}

export default function PokemonDetail({ id }: PokemonDetailProps) {
  const { loading, error, data } = useQuery<PokemonData, PokemonVars>(
    GET_POKEMON,
    {
      variables: { id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data?.pokemon;

  return (
    <div>
      <h2>{pokemon?.name}</h2>
      <p>ID: {pokemon?.id}</p>
      <p>Type 1: {pokemon?.type1}</p>
      {pokemon?.type2 && <p>Type 2: {pokemon.type2}</p>}
    </div>
  );
}