export const pokemonTypeColor = (pokemon: string) => {
  switch (pokemon) {
    case 'normal':
      return '#AAA67F';
    case 'fighting':
      return '#C12239';
    case 'flying':
      return '#7B61FF';
    case 'ground':
      return '#DEC16B';
    case 'poison':
      return '#A43E9E';
    case 'rock':
      return '#B69E31';
    case 'bug':
      return '#A7B723';
    case 'ghost':
      return '#70559B';
    case 'steel':
      return '#B7B9D0';
    case 'fire':
      return '#F57D31';
    case 'water':
      return '#6493EB';
    case 'grass':
      return '#74CB48';
    case 'electric':
      return '#F9CF30';
    case 'psychic':
      return '#FB5584';
    case 'ice':
      return '#9AD6DF';
    case 'dragon':
      return '#7037FF';
    case 'dark':
      return '#75574C';
    case 'fairy':
      return '#E69EAC';
  }
};
