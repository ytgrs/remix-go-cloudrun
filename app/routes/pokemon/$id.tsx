import { useParams } from '@remix-run/react';
import PokemonDetail from '~/components/PokemonDetail';

export default function PokemonDetailPage() {
  const { id } = useParams();
  return <PokemonDetail id={Number(id)} />;
}