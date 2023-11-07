import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 2rem;
  text-align: center;
  position: sticky;
  bottom: 0;
`;

export default function Footer () {
  return (
    <StyledFooter>
        <footer>
            <p>Created with React. 💙</p>
            <p>© 2023 Developed by Victor B. Sarmento.</p>
        </footer>
    </StyledFooter>
  );
}