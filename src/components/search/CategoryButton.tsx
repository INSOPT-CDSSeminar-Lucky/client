import { useState } from 'react';
import styled from 'styled-components';

import { ArrowLeft, ArrowRight, HamburgerButton } from '../../asset/icon';
import illustrate from '../../asset/image/illustrate.png';
import photoshop from '../../asset/image/photoshop.png';
import theme from '../../styles/theme';
import HamburgerModal from './HamburgerModal';

const CategoryButton = (): JSX.Element => {
  interface Arr {
    id: number;
    text: string;
    color?: string;
    img?: string | undefined;
  }
  const categorys: Arr[] = [
    { id: 1, text: 'Photoshop', color: 'transparent', img: photoshop },
    { id: 2, text: 'Photoshop', color: 'transparent', img: photoshop },
    { id: 3, text: 'Illustrate', color: 'transparent', img: illustrate },
    { id: 4, text: 'Photoshop', color: 'transparent', img: photoshop },
    { id: 5, text: '최고의 Behance', color: '#2456f7', img: '#' },
    { id: 6, text: 'Illustrate', color: 'transparent', img: illustrate },
    { id: 7, text: 'Photoshop', color: 'transparent', img: photoshop },
    { id: 8, text: 'Illustrate', color: 'transparent', img: illustrate },
    { id: 9, text: 'Illustrate', color: 'transparent', img: illustrate },
  ];

  const [hamburgerClicked, sethamburgerClicked] = useState(false);
  const [hamburgerColor, sethamburgerColor] = useState('white');

  const handleHamburgerClick = () => {
    sethamburgerClicked(true);
  };

  return (
    <>
      {hamburgerClicked && <HamburgerModal />}

      <StCategoryButtonWrapper>
        <IconWrapper>
          <ArrowWrapper>
            <ArrowLeft />
            <ArrowRight />
          </ArrowWrapper>
          <HamburgerButton onClick={handleHamburgerClick} />
        </IconWrapper>
        <GradientWrapper>
          <GradientLeft />
          <GradientRight />
        </GradientWrapper>
        <ButtonWrapper>
          {categorys.map((category) => (
            <Button
              type="button"
              key={category.id}
              style={{
                backgroundColor: category.color,
                backgroundImage: `url(${category.img})`,
              }}>
              {category.text}
            </Button>
          ))}
        </ButtonWrapper>
      </StCategoryButtonWrapper>
    </>
  );
};

export default CategoryButton;

const StCategoryButtonWrapper = styled.body`
  position: relative;
`;

const IconWrapper = styled.section`
  width: 120rem;
  height: 5.625rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
`;

const ArrowWrapper = styled.section`
  width: 112.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GradientWrapper = styled.section`
  width: 120rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
`;

const GradientLeft = styled.section`
  width: 21.0625rem;
  background-image: linear-gradient(to right, black, transparent);
  height: 5.625rem;
`;
const GradientRight = styled.section`
  width: 21.0625rem;
  background-image: linear-gradient(to left, black, transparent);
  height: 5.625rem;
`;

const ButtonWrapper = styled.section`
  overflow: hidden;
  width: 138.375rem;
  margin-left: -9.1875rem;
  position: absolute;
  z-index: 1;
`;

const Button = styled.button`
  width: 14.375rem;
  height: 5.625rem;
  flex-grow: 0;
  margin: 0 0.5rem;
  padding: 1.9375rem 1.6875rem 1.875rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.behance_white};

  ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
`;