import React, { Component } from 'react';
import './MapBox.scss';

class MapBox extends Component {

  componentDidMount() {
    let el = document.getElementById('map');
    let map = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(33.450701, 126.570667)
    });

    // 지도 컨트롤 관련
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    let mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도 마커 관련
    let markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  };

  render() {
    return (
      <>
        <div className="card-body">
          <div className="card-map">
            <div className="card-inner">
              <div className="map-box" id="map"></div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default MapBox;