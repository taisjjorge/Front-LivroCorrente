import styled from 'styled-components';

export const Section = styled.div`
    background:linear-gradient(to right, #0084D7, #0266A5);
    height: 600px;
    display: flex;
`
export const Lista = styled.div`
    padding-top: 30px;
    margin-bottom: 200px;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
    `
    
    export const Conteudo = styled.div`
    width: 25%;
    text-align: center; 
    height: 400px;
    img {
        margin: 0 auto;
        width:150px;
    }
    `
    
    export const Sobrenos = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    `
    
    export const Inf = styled.div`
    margin-right: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
        font-family: 'Amatic SC', cursive;
        font-weight:bold;
        color: rgb(41, 41, 41);
        margin-bottom: 20px;
        color:#fff;
    }
    p {
        color:#fff;
    }
    `
    
    export const Squad = styled.div`
    display: flex;
    justify-content: space-around;

`
export const Info = styled.div`
    font-style: italic;
    line-height: 2;
    color: #fff;
    margin-bottom: 20px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

`