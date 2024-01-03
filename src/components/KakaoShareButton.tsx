import { useEffect } from 'react';
import { IGuestBookInfo } from '../pages/footprint/interfaces';

const KakaoShareButton = ({ info }: { info: IGuestBookInfo }) => {
  const { photo, name, address, count } = info;

  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    kakaoButton();
  }, []);

  const kakaoButton = () => {
    console.log(info);
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
        console.log(kakao);
      }

      // #TODO : des랑 url 실제 데이터로 바꿔줘야 함
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}`,
          description: '방명록에 발자국을 남기러 가볼까요?',
          imageUrl: `https://fastly.picsum.photos/id/227/200/300.jpg?hmac=t3Ir7I6CJr-OrWOq4QVsRQTjpp03ce7vtDA3-NLdm-c`,
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  };
  return <img onClick={() => kakaoButton()} src="/src/assets/kakao.png" className="w-12 h-12 rounded-full"></img>;
};

export default KakaoShareButton;
