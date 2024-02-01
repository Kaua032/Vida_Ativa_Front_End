import styled from "styled-components";

export const NavbarMobileMain = styled.main`
    display: none;
    flex-direction: column;
    padding: 5px;
    width: 3rem;
    height: 100vh;
    background-color: white;
    position: fixed;
    @media (max-width: 1000px) {
        display: flex;
    }
`