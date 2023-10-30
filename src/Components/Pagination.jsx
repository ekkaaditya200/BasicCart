import PropTypes from 'prop-types';
const Pagination = ({ products, page, handlePage, cards }) => {
  const prevPage = () => {
    let x = page;
    if (x == 1)
      x = 2;
    handlePage(x - 1)
  }
  const nextPage = () => {
    let x = page;
    if (x >= products.length / cards)
      x = x - 1;
    handlePage(x + 1)
  }
  return (
    <div className="w-screen flex justify-around">
      <button className="bg-blue-200 p-4 rounded-xl" onClick={prevPage}>Prev</button>
      <button className="bg-blue-200 p-4 rounded-xl" onClick={nextPage}>Next</button>
    </div>
  )
}

Pagination.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
  cards: PropTypes.func.isRequired,
};

export default Pagination
