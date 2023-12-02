export const CastList = ({ cast }) => {
  const DEFAULT_IMG =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return cast.map(el => (
    <li key={el.id}>
      <img
        src={
          el.profile_path
            ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
            : DEFAULT_IMG
        }
        alt={'poster'}
        width={250}
      />
      <p>Name: {el.name}</p>
      <p>Character: {el.character}</p>
    </li>
  ));
};
