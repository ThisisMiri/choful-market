import styled from 'styled-components';
import Profile from '../../components/atoms/Profile/Profile';
import UserProfile from '../../assets/default-profile.png';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { useRecoilValue } from 'recoil';
import { searchUserData } from '../../atoms';

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SearchUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 13px 16px 56.5px;
  margin: 0 auto 16px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const SearchLi = styled.li`
  display: flex;
  margin-top: 16px;
  cursor: pointer;
`;

const SearchDiv = styled.div`
  width: 100%;
  margin-left: 12px;
`;

const SearchP = styled.p`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`;

const Search = () => {
  const searchUserDataState = useRecoilValue(searchUserData);
  console.log(searchUserDataState);
  return (
    <SearchWrapper>
      <CommonWrapper>
        <SearchUl>
          {searchUserDataState.map(searchData => (
            <SearchLi key={searchData._id}>
              <Profile
                size='42px'
                imgSrc={searchData.image}
                imgAlt='프로필 이미지'
              />
              <SearchDiv>
                <SearchP>{searchData.username}</SearchP>
                <SearchP>{`@${searchData.accountname}`}</SearchP>
              </SearchDiv>
            </SearchLi>
          ))}
        </SearchUl>
      </CommonWrapper>
    </SearchWrapper>
  );
};

export default Search;
