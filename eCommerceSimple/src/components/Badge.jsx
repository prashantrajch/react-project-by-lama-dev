import styled from "styled-components";

const Badge = ({ children, badgeContent, color }) => {
  const Box = styled.div`
    position: relative;
    display: inline-block;
  `;
  const BadgeContent = styled.span`
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 0 6px;
    background-color: ${color || "red"};
    border-radius: 10px;
    font-size: 12px;
    line-height: 18px;
    color: white;
  `;
  return (
    <Box>
      {children}
      <BadgeContent>{badgeContent}</BadgeContent>
    </Box>
  );
};

export default Badge;
