import styled from "styled-components";

const NavItem = styled.li`
  margin-left: 10px;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      background-color: #7a44f6;
    }
  }
`;

export default NavItem;