<div className="kitty">
          {user.email ? user.email[0].toUpperCase() : null}
        </div>

function Logged({ logoutUser }) {
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <h1 className="logged__title">Good job! You got logged in!</h1>
          <button className="btn hover" onClick={logoutUser}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logged;
