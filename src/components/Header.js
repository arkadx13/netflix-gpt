const Header = () => {
  return (
    <div>
      {/* Had to separate the div and the image elements to create the black background-gradient for header reach the full width of the browser */}
      <div className="absolute w-full h-48 px-8 py-2 bg-gradient-to-b from-black z-10"></div>
      <img
        className="absolute w-48 z-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
