import { AboutPageWrapper, CardsContainerStyled, CardWrapperStyled, LinkButtonStyled, TextContainerStyled } from "./AboutPageStyles";

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <CardsContainerStyled>
        <CardWrapperStyled>
          <img src="https://www.yourcentralvalley.com/wp-content/uploads/sites/54/2024/08/2024_Pokemon_World_Championships_Event_Photo_6.jpg?w=2560&h=1440&crop=1" alt="About Us" />
          <TextContainerStyled>
            <h2>We are PokéWorld!</h2>
            <p>
              We are a digital platform that sells exclusively Pokémon products, 
              such as collectible cards, action figures, and some all original and 
              certified. That's not all! We also organize the Pokémon World Championship, 
              awarding wonderful prizes to the winning fans. Join our wonderful community!
            </p>
          </TextContainerStyled>
        </CardWrapperStyled>
        <CardWrapperStyled>
          <img src="https://www.serebii.net/themeparks/universalstudiosjapan/nolimitparade.jpg" alt="PokePark" />
          <TextContainerStyled>
            <h2>Don't miss our events</h2>
            <p>
              We invite you to a unique, fun, and unforgettable
              experience! Come try it and learn all the new features.
            </p>
          </TextContainerStyled>
        </CardWrapperStyled>
        <CardWrapperStyled>
          <img src="https://st2.depositphotos.com/1309454/7392/v/950/depositphotos_73921481-stock-illustration-shopping-online-background.jpg" alt="Card Image" />
          <TextContainerStyled>
            <h2>Shopping</h2>
            <p>
              Buy as much as you want, without restrictions or limits.
              Everything will be saved on your device so you can continue
              shopping at any time. We work with all payment methods.
            </p>
          </TextContainerStyled>
        </CardWrapperStyled>
        <CardWrapperStyled>
          <img src="https://w7.pngwing.com/pngs/19/911/png-transparent-computer-security-computer-icons-threat-security-miscellaneous-computer-network-computer-wallpaper.png" alt="Card Image" />
          <TextContainerStyled>
            <h2>Security</h2>
            <p>
              We use an end-to-end encryption system for all purchases and 
              transactions you make on our platform, wherever you are.
            </p>
          </TextContainerStyled>
        </CardWrapperStyled>
        <CardWrapperStyled>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-online-technical-support-with-3d-rendering-call-center-operator-assisting-image_3893834.jpg" alt="Card Image" />
          <TextContainerStyled>
            <h2>Support</h2>
            <p>
              Online and in person. We'll help you with purchases,
              services, and everything else you need. Always here
              for you.
            </p>
          </TextContainerStyled>
        </CardWrapperStyled>
      </CardsContainerStyled>
      <LinkButtonStyled to="/">Go Start</LinkButtonStyled>
    </AboutPageWrapper>
  );
}

export default AboutPage;