import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Icon from '../../atoms/Icon/Icon';
import Img from '../../atoms/Img/Img';
import { GalleryWrapper, ImgLink } from './style';

const GalleryPost = () => {
  const token = localStorage.getItem('token');
  const path = useLocation().pathname;
  const { id } = useParams();
  const [postData, setPostData] = useState([]);

  const getMyPostData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${id}/userpost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setPostData(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (path.includes('yourProfile') || path.includes('profile')) {
      getMyPostData();
    }
    console.log(postData);
  }, []);

  return (
    <GalleryWrapper>
      {postData.map(postData =>
        postData.image ? (
          <ImgLink to={`/post/${postData.id}`}>
            <Img
              key={postData.id}
              imgSrc={postData.image.split(',')[0]}
              imgAlt='게시글 갤러리뷰 이미지'
            />
            <Icon
              position='absolute'
              top='5px'
              right='5px'
              size='20px'
              xpoint='-236px'
              ypoint='-139px'
              title='여러장'
              className={postData.image.split(',').length === 1 && 'hide'}
            />
          </ImgLink>
        ) : null,
      )}
    </GalleryWrapper>
  );
};

export default GalleryPost;
