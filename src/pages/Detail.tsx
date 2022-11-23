import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ImgScroll from '../asset/image/img_scroll.png';
import BottomIcon from '../components/Detail/BottomIcon';
import DetailBlackHeader from '../components/Detail/DetailBlackHeader';
import DetailHover from '../components/Detail/DetailHover';
import DetailWhiteHeader from '../components/Detail/DetailWhiteHeader';
import RightIcon from '../components/Detail/RightIcon';
import { DetailData } from '../types/project';
import { getProjectId } from '../utils/lib/project';

const Detail = () => {
  const { state } = useLocation();
  const userId = state.id;
  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [pageY, setPageY] = useState<number>(0);
  const documentRef = useRef(document);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setIsSpread(pageYOffset <= 350);
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover((prev) => !prev);
  };

  const [scrollImg, setscrollImg] = useState<string>();

  useEffect(() => {
    const getContentList = async () => {
      const { data } = await getProjectId(`${userId}`);
      console.log(data);
      const getImgData = data.data.image;
      setscrollImg(getImgData);
    };

    getContentList();
  }, []);

  return (
    <>
      <StHeaderWrapper>
        {isSpread ? (
          <DetailBlackHeader />
        ) : (
          <>
            <DetailWhiteHeader />
            <hr />
          </>
        )}
      </StHeaderWrapper>
      <StBody>
        <RightIcon />
        <BottomIcon />
        {isHover && <DetailHover />}

        <StImgWrapper>
          <StImg src={scrollImg} alt="메인이미지" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} />
        </StImgWrapper>
      </StBody>
    </>
  );
};

export default Detail;

const StHeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  left: 0;
  right: 0;
  z-index: 5;
`;

const StBody = styled.section`
  padding-top: 6.5rem;
`;

const StImg = styled.img`
  width: 91.375rem;
`;

const StImgWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};
`;
