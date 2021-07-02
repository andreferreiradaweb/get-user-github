import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  background: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 16px 7px rgba(0,0,0,0.19);
`

export const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 15px
  }
  strong {
    font-size: 20px;
    color: var(--blue-font);
    font-weight: 600;
  }
  p {
    font-size: 11px;
    margin-bottom: 5px
  }
  a {
    font-size: 11px;
    color: var(--blue-font);
    margin-bottom: 5px
  }
`

export const HeaderList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  width: 300px;
  overflow: scroll;
  height: 280px;
  padding: 10px;
`

export const HeaderListRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 5px 0;

  p {
    font-size: 10px;
    margin-right: 7px;
  }
  a {
    font-size: 10px;
    color: var(--blue-font);
    text-decoration: none;
  }

  border-bottom: 1px solid #606060;
`

export const MapStyledContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 0 0 20px 20px;

  .leaflet-bottom, .leaflet-right {
    display: none;
  }
`