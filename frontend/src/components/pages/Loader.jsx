import "./loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className='center-container'>
      <div className='facebook-loader'>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

/* const style = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const Loader = () => {
  return (
    <div style={style}>
      <h1 style={{ fontSize: "5rem" }}>Loading...</h1>
    </div>
  );
};

export default Loader; */

/* const Loader = () => {
  return (
    <div className='mobile-loader-container'>
      <div className='mobile-loader'>
        <div className='tree'></div>
        <div className='tree'></div>
        <div className='tree'></div>
        <div className='tree'></div>
        <div className='tree'></div>
      </div>
    </div>
  );
};

export default Loader; */
