
import { useState, useEffect } from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import { GoogleSearch } from 'src/components/Google'
import MenuSection from './MenuSection'

import {
  StyledLink,
  StyledHeader,
  StyledHeaderContainer,
  StyledOuterWrapper,
  StyledSignInBtn,
  StyledMainContainer,
  StyledMainContentWrapper,
  StyledLogoContainer,
  StyledLogo,
  StyleddLocationContainer,
  StyledLocationText,
  StyledFooterContainer,
  StyledFooterContentContainer,
  StyledFooterRightContentContainer,
  StyledAppsMenu,
  StyledAppsMenuContainer,
  StyledAppMenuAppContainer,
  StyledAppMenuAppIcon,
  StyledAppMenuAppText,
} from './GoogleHomeStyles'




const GoogleHome = () => {

  const MENU_ICON_ID = 'menuIcon'
  const MENU_ID = 'appsMenu'
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen)

  // TODO. Close dropdown menu on outer click
  useEffect(() => {
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const elementId = target.id
    })
  }, [])

  return (
    <StyledOuterWrapper>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledLink href="/"> Gmail </StyledLink>
          <StyledLink href="/"> Images </StyledLink>
          <StyledAppsMenuContainer>
            <AppsIcon onClick={handleMenuToggle} fontSize='large' />
          </StyledAppsMenuContainer>
          <StyledSignInBtn> SignIn </StyledSignInBtn>
          {menuOpen && (
            <StyledAppsMenu id={MENU_ID}>
              <MenuSection>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ borderRadius: '100%' }}
                    src="https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.6435-9/120216244_1001132530368111_3963123139754089355_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=kHd5iJUg914AX8vVpBC&_nc_ht=scontent.ftbs5-1.fna&oh=84ad08ae7f182c6e4e03fec2ffa3a8b2&oe=60AC6A5A"
                  />
                  <StyledAppMenuAppText> Account </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.2)', position: 'relative', top: '3px' }}
                    src="https://cdn.worldvectorlogo.com/logos/google-my-business-logo.svg"
                  />
                  <StyledAppMenuAppText> My business </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
                  />
                  <StyledAppMenuAppText> Gmail </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png"
                  />
                  <StyledAppMenuAppText> Drive </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://media.flaticon.com/dist/min/img/landing/gsuite/slides.svg"
                  />
                  <StyledAppMenuAppText> Slides </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://pages.uncc.edu/techne/wp-content/uploads/sites/93/2015/02/Google-Docs-Icon.png"
                  />
                  <StyledAppMenuAppText> Docs </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://image.flaticon.com/icons/png/512/2965/2965327.png"
                  />
                  <StyledAppMenuAppText> Sheets </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="data:image/png;base64,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"
                  />
                  <StyledAppMenuAppText> Calendar </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/1200px-Google_Chat_icon_%282020%29.svg.png"
                  />
                  <StyledAppMenuAppText> Chat </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/934px-Google_Meet_icon_%282020%29.svg.png"
                  />
                  <StyledAppMenuAppText> Meet </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Google_Sites_icon_%282020%29.svg/1200px-Google_Sites_icon_%282020%29.svg.png"
                  />
                  <StyledAppMenuAppText> Sites </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://img.icons8.com/color/452/google-contacts.png"
                  />
                  <StyledAppMenuAppText> Contacts </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
                <StyledAppMenuAppContainer>
                  <StyledAppMenuAppIcon
                    style={{ transform: 'scale(1.3)', position: 'relative', top: '5px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Google_Currents_2019_Logo.svg/1200px-Google_Currents_2019_Logo.svg.png"
                  />
                  <StyledAppMenuAppText> Currents </StyledAppMenuAppText>
                </StyledAppMenuAppContainer>
              </MenuSection>
            </StyledAppsMenu>
          )}
        </StyledHeaderContainer>
      </StyledHeader>
      <StyledMainContainer>
        <StyledMainContentWrapper>
          <StyledLogoContainer>
            <StyledLogo src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          </StyledLogoContainer>
          <GoogleSearch />
        </StyledMainContentWrapper>
      </StyledMainContainer>
      <StyleddLocationContainer>
        <StyledLocationText>
          Tbilisi
        </StyledLocationText>
      </StyleddLocationContainer>
      <StyledFooterContainer>
        <StyledFooterContentContainer>
          <StyledLink href="/"> About </StyledLink>
          <StyledLink href="/"> Advertising </StyledLink>
          <StyledLink href="/"> How search works </StyledLink>
        </StyledFooterContentContainer>
        <StyledFooterRightContentContainer>
          <StyledLink href="/"> About </StyledLink>
          <StyledLink href="/"> Advertising </StyledLink>
          <StyledLink href="/"> How search works </StyledLink>
        </StyledFooterRightContentContainer>
      </StyledFooterContainer>
    </StyledOuterWrapper>
  )
}

export default GoogleHome