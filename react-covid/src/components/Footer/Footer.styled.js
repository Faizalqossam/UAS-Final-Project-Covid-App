import styled from 'styled-components'

const StyledFooter = styled.div`
/* small screen*/
    background-color:#06D6A0 ;
    padding: 1rem;
    color: #fff;
    margin-top: 5rem;

footer{
    display: flex;
    flex-direction: column;
}

h1{
    font-weight: 500;
    font-size: 2.4rem;
}

h4{
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 1rem;
}

ul{
    display: flex;
    flex-direction: column;
    list-style: none;
}

@media(min-width: 768px){
    footer{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    ul{
        flex-direction: row;
    }

    li{
        margin: 0 1rem;
    }
}

`
export default StyledFooter;