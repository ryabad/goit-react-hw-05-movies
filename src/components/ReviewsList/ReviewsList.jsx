export const ReviewsList = ({ data }) => {
  return data.map(el => (
    <li key={el.id}>
      <h3>Author: {el.author}</h3>
      <p>Username: {el.author_details.username}</p>
      <p>{el.content}</p>
    </li>
  ));
};
