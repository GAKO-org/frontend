import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@/assets/icons/searchBar-icon.svg";

const SearchBar = () => {
  return (
    <SearchBarLayout>
      <SearchBarInput></SearchBarInput>
      <SearchIconBox>
        <SearchIcon />
      </SearchIconBox>
    </SearchBarLayout>
  );
};

export default SearchBar;

const SearchBarLayout = styled.div`
  /* border-radius: 4px; */
  position: relative;
  min-width: 400px;
`;

const SearchIconBox = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;

  & > svg > path {
    stroke: var(--ref-gray-500);
  }
`;

const SearchBarInput = styled.input`
  border-radius: 4px;
  border-color: var(--ref-gray-300);

  font-size: 0.875rem;
  width: 100%;

  display: block;
  text-align: left;

  min-height: 2rem;
  border-radius: 8px;
  border: 1px solid rgb(206, 212, 218);
  background: rgb(246, 246, 246);

  &:focus {
    border-color: var(--ref-green-500);
    /* border-color: red; */
    outline: none;
  }
`;
