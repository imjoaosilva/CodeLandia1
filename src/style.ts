import styled from 'styled-components';

const styles = {
    header: {
        background: "linear-gradient(45deg, #574AE8 0%, #3EA1DB 100%)",
        text: "#FFF"
    },
    content: {
        background: "#FFF",
    }
}

export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background: #F3F5F7;
`

export const Header = styled.header`
    display:flex;
    width: 100%;
    height: 250px;
    background: ${styles.header.background};
    flex-direction: column;
    margin-bottom: 50px;

    @media only screen and (max-width: 1000px) {
        height: 200px;
    }
`

export const HeaderContainer = styled.div`
    width: 900px;
    margin: auto;
    height: 100%;

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }
`

export const TextContainer = styled.div`
    margin-top: 31px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 73px;
`

export const Text = styled.h1`
    color: ${styles.header.text};
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media only screen and (max-width: 1000px) {
        font-size: 17px;
    }
`
export const InputContainer = styled.div`
    display:flex;
    align-items: center;

    svg {
        position: absolute;
        margin-left: 17px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 65px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.20);
    border:none;
    outline:none;
    padding-left: 60px;
    color: ${styles.header.text};
    font-size: 15px;

    &::placeholder {
        color: ${styles.header.text};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.5;
    }
`

export const Content = styled.div`
    display:flex;
    gap: 50px;
    flex-direction: column;
    padding-bottom: 50px;
    width: 900px;
    margin: 0 auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }

    svg {
        transition: all 0.2s;
        
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            opacity: 0.5;
        }
    }

`

export const Post = styled.div`
    width: 100%;
    padding: 23px;
    background: ${styles.content.background};
    max-width: 100%;
`

export const PostHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const PostDate = styled.p`
    color: #717171;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PostTitle = styled.h1`
    color: #1A202C;
    font-size: 22px;
    margin-bottom: 8px;
`

export const PostDescription = styled.p`
    color: #717171;
    font-size: 15px;
`