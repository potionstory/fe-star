import React, { Component } from 'react';
import Layout from './Layout';
import ContentsCard from '../components/ContentsCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import HeadImg from '../images/common/bg_headline_confetti.png';
import imageFrontend from '../images/about/about_frontend.jpg';
import imageKakao from '../images/about/about_kakao.png';
import imageOffline from '../images/about/about_offline.jpg';
import imageParty from '../images/about/about_party.jpg';

class About extends Component {

  state = {
    contents: [
      {
        image: imageFrontend,
        title: "Front-End SuperStar",
        text: "FE-star는 Front-End와 SuperStar의 합성어로서 Front-End 개발자분들이 바로 주인공이며 SuperStar라는 뜻입니다. 바로 Front-End 개발자분들을 위한 모임입니다."
      },
      {
        image: imageKakao,
        title: "시작은 카톡으로부터...",
        text: "카카오톡으로 많은 사람들이 점점 모이고, Front-End 개발자들을 위한 오픈톡방이 생기면서 사람들은 소통을 시작하게 되었습니다. 그것이 시작이었습니다."
      },
      {
        image: imageOffline,
        title: "온라인에서부터 오프라인까지",
        text: "온라인으로만 이루어졌던 소통은, 자연스럽게 오프라인으로까지 이어졌습니다. 결국 중요한건 기술 이전에 사람과 사람이었습니다. 이제는 디지털 세상속에서 따뜻한 인연을 만나보기 바랍니다."
      },
      {
        image: imageParty,
        title: "다양한 음식과 이벤트!",
        text: "모임에서 빠질수 없는것이 바로 음식과 이벤트입니다. 먹는 즐거움, 이벤트에 당첨되는 즐거움도 놓칠수는 없겠죠? 행운이 여러분 곁에 함께하기를 바랍니다."
      }
    ]
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    
    const { contents } = this.state;

    return (
      <Layout>
        <section className="section-about">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faCompass} size="8x" />
            </div>
            <h2><span className="font-gradient">FE의<br />FE에 의한<br />FE를 위한<br />FE-STAR</span></h2>
            <p><span className="font-gradient">사람과 사람사이를<br />이어주는 축제의 장</span></p>
          </div>
          <article className="contents">
            <div className="card-area">
              {contents.map(item => (
                <ContentsCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  align="left"
                />
              ))}
            </div>
          </article>
        </section>
      </Layout>
    );
  };
}

export default About;
