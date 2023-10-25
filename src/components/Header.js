import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANAGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // subscribing to the store
  const gptPage = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-36 md:w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex my-5">
          {gptPage && (
            <select
              className="h-8 bg-black text-white opacity-30 hover:opacity-70 p-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANAGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="h-8 w-28 px-4 mx-0 md:mx-4 rounded-sm bg-purple-800 text-white text-sm hover:text-purple-800 hover:bg-white hover:font-bold"
            onClick={handleGptSearchClick}
          >
            {gptPage ? "Home" : "GPT Search"}
          </button>
          <img className="hidden md:inline-block h-8" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="px-3 border border-white h-8 mx-4 rounded-sm opacity-30 text-white hover:scale-95 hover:animate-pulse hover:opacity-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
