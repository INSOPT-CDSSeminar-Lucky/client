import styled from 'styled-components';

import {
  ICBtnAdd,
  ICBtnLiveContent,
  ICBtnNext,
  ICDropDown,
  ICFavorite,
  ICLineCol,
  ICPerson,
  ICSearch,
  ICStar,
} from '../../asset/icon';
const Header = () => {
  return (
    <StHeaderWrapper>
      <form>
        <StButton>
          <span>프로젝트</span>
          <ICDropDown fill="white" />
        </StButton>
        <StInputWrapper>
          <ICSearch width="24" height="24" />
          <input placeholder="Behance 추천 프로젝트 둘러보기" />
        </StInputWrapper>
      </form>
      <StSection>
        <article className="add_btn_wrapper">
          <ICBtnAdd />
          <p>추가하기</p>
        </article>
        <article className="liveContent_btn_wrapper">
          {[1, 2, 3, 4, 5, 6].map((data) => (
            <ICBtnLiveContent key={data} />
          ))}
        </article>
        <ICBtnNext className="next_btn" />
      </StSection>
    </StHeaderWrapper>
  );
};

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: rem;
  padding: 0 1.875rem;

  & > form {
    display: flex;

    width: 100%;
  }
`;
const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1rem;

  border: solid 0.0625rem ${({ theme }) => theme.colors.behance_gray400};
  border-radius: 0 0.3125rem 0.3125rem 0;
  & > input {
    width: 100%;
    padding: 0 1rem;

    border: none;

    ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
  }
`;
const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;

  border: none;
  border-radius: 0.3125rem 0 0 0.3125rem;
  background-color: ${({ theme }) => theme.colors.behance_blue};
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};

  text-align: center;

  & > span {
    margin: 0.5rem 0rem;
  }
`;
const StSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: top;

  width: 100%;
  padding-top: 3.375rem;
  margin-left: 4.3125rem;

  & > article.add_btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      margin-top: 0.75rem;

      color: ${({ theme }) => theme.colors.behance_black};
      ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18}
    }
  }

  & > article.liveContent_btn_wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2.25rem;

    margin-left: 3.75rem;
  }
  & > .next_btn {
    position: absolute;
    right: 7rem;
    margin-top: 0.65rem;
  }
`;
