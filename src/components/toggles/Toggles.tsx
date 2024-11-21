import { useState } from "react";
import styled from "styled-components";

const Toggles = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <TogglesLayout>
      {["인기순", "최신순"].map((label, idx) => (
        <ToggleBox
          key={idx}
          $isActive={activeIndex === idx + 1}
          onClick={() => handleClick(idx + 1)}
        >
          {label}
        </ToggleBox>
      ))}
    </TogglesLayout>
  );
};

export default Toggles;

const TogglesLayout = styled.div`
  display: flex;
  /* width: auto; */

  border-radius: 10px;
  /* gap: 10px; */
  /* background-color: var(--ref-gray-200); */
`;

const ToggleBox = styled.div<{ $isActive: boolean }>`
  padding: 8px 14px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive ? "var(--main-color)" : "white"};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  line-height: 1.25;
  font-size: 1rem;
`;
