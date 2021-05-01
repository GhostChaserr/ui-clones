import styled from 'styled-components'


export const StyledOuterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto auto;
`

export const StyledHeader = styled.header`

`

export const StyledHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledLink = styled.a`
  color: black;
  margin: 0 5px;
  text-decoration: underline;
`

export const StyledSignInBtn = styled.button`
  outline: none;
  border: none;
  background-color: blue;
  padding: 13px 23px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`

export const StyledMainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const StyledMainContentWrapper = styled.div`
  width: 40%;
  border: 1px solid red;
`

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const StyledLogo = styled.img`
  width: 200px;
`

export const StyleddLocationContainer = styled.section`
  display: flex;
  background-color: gray;
  padding: 20px;
`

export const StyledLocationText = styled.p`
  color: black;
`

export const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: gray;
  padding-bottom: 20px;
`

export const StyledFooterContentContainer = styled.div`
  display: flex;

`

export const StyledFooterRightContentContainer = styled(StyledFooterContainer)`
`

export const StyledAppsMenu = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 20px;
  right: 20px;
  height: 350px;
  overflow: scroll;
  z-index: 100;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  -webkit-box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.15);
  box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.15);
`


export const StyledAppsMenuContainer = styled.div`
  cursor: pointer;
  position: relative;
  top: 2px;
  margin: 0 5px;
`

export const StyledGridLayoutContainer = styled.div`
  width: 100%;
  border: 1px solid blue;
`

export const StyledAppMenuSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const StyledAppMenuAppContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s ease;
  border-radius: 5px;
  margin: 5px;
  height: 75px;
  padding: 10px;

  &:hover {
    transition: all .3s ease;
    background-color: #94b1ff6e;
  }
`

export const StyledAppMenuAppIcon = styled.img`
  width: 40px;
  border-radius: 5px;
`

export const StyledAppMenuAppText = styled.p`
  color: black;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  white-space: nowrap;
  position: relative;

`

export const StyledDivider = styled.hr`
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:#FFFF00;
  height: 1px;
`
