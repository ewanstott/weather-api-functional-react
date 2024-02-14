import Conditions from "./Conditions";
import Header from "./Header";
import Location from "./Location";
import Search from "./Search";
import Temp from "./Temp";

const Interface = () => {
  return (
    <>
      <Header />

      {/* Search box */}
      <Search />

      {/* Location */}
      <Location />
      {/* Temp */}
      <Temp />

      {/* Conditions */}
      <Conditions />
    </>
  );
};

export default Interface;
