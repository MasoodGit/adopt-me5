import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = () => {
  const breeds = [];
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown('Animal',"dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", '', breeds);


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            onChange={e => updateLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
