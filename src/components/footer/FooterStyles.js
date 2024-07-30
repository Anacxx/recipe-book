import styled from "styled-components";
export const FooterWrapper = styled.footer`
  background: #000;
  padding: 30px 0;
  font-family: 'Play', sans-serif;
  text-align: center;
  color: gray;

`;

export const Row = styled.div`
  width: 100%;
  margin: 1% 0;
  padding: 0.6% 0;
  font-size: 0.8em;
`;

export const SocialLinks = styled.div`
  a {
    text-decoration: none;
    color: gray;
    transition: color 0.5s;
    i {
      font-size: 2em;
      margin: 0 1%;
    }
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 720px) {
    a i {
      margin: 0 3%;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    margin: 0 30px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    li {
      margin: 10px 0;
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
`;