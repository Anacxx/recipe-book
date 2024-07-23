
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const AvatarLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
`;

export const AvatarIcon = styled(FaUserCircle)`
  font-size: 2em;
  color: #333;
  transition: color 0.3s;

  ${AvatarLink}:hover & {
    color: var(--primary-color); /* Cor quando passa o mouse */
    cursor: pointer;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 130px;
  background-color: white;
  color: var(--text-color);
  text-align: center;
  padding: 6px 3px;
  border-radius: 6px;
  position: absolute;
  bottom: 150%;
  left: 50%;
  z-index: 1;
  margin-left: -68px;
  opacity: 0;
  margin: 1px solid gray;
  transition: opacity 0.3s;

  ${AvatarLink}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;