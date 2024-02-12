import PropTypes from "prop-types";


const User = ({ eachUser }) => {
    const {
      childFullNames,
      childAge,
      homeAddress,
      parentNames,
      stateOfOrigin,
      childClass,
      parentsEmail,
      password,
    } = eachUser;
    return (
      <div>
        <ul>
          <li>{childFullNames}</li>
          <li>{childAge}</li>
          <li>{homeAddress}</li>
          <li>{parentNames}</li>
          <li>{stateOfOrigin}</li>
          <li>{childClass}</li>
          <li>{parentsEmail}</li>
          <li>{password}</li>
        </ul>
      </div>
    );
  };
  
  User.propTypes = {
    eachUser: PropTypes.shape({
      childFullNames: PropTypes.string.isRequired,
      childAge: PropTypes.string.isRequired,
      homeAddress: PropTypes.string.isRequired,
      parentNames: PropTypes.string.isRequired,
      stateOfOrigin: PropTypes.string.isRequired,
      childClass: PropTypes.string.isRequired,
      parentsEmail: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default User;


  /* const User = ({ user }) => {
  const {
    childFullNames,
    childAge,
    homeAddress,
    parentNames,
    stateOfOrigin,
    childClass,
    parentsEmail,
    password,
  } = user;
  return (
    <div>
      <ul>
        <li>{childFullNames}</li>
        <li>{childAge}</li>
        <li>{homeAddress}</li>
        <li>{parentNames}</li>
        <li>{stateOfOrigin}</li>
        <li>{childClass}</li>
        <li>{parentsEmail}</li>
        <li>{password}</li>
      </ul>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    childFullNames: PropTypes.string.isRequired,
    childAge: PropTypes.string.isRequired,
    homeAddress: PropTypes.string.isRequired,
    parentNames: PropTypes.string.isRequired,
    stateOfOrigin: PropTypes.string.isRequired,
    childClass: PropTypes.string.isRequired,
    parentsEmail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default User; */
