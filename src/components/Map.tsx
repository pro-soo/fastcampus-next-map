
/*global kakao */

import Script from "next/script";
import * as stores from "@/data/store_data.json";

declare global {
    interface Window {
        kakao: any;
    }
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

export default function Map() {
    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            // 식당 데이터 마커 띄우기
            stores?.['DATA']?.map((stroe) => {
                var imageSrc = stroe?.bizcnd_code_nm ? `images/markers/${stroe?.bizcnd_code_nm}.png` : "images/markers/default.png",
                    imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
                    imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                // 마커가 표시될 위치입니다 
                var markerPosition = new window.kakao.maps.LatLng(stroe?.y_dnts, stroe?.x_cnts);

                // 마커를 생성합니다
                var marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 마커 커서가 오버되었을 때 마커 위에 표시할 인포윈도우 생성
                var content = `<div class="infowindow">${stroe?.upso_nm}</div>`;    // 인포윈도우에 표시될 내용

                // 커스텀 오버레이를 생성합니다
                var customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    xAnchor: 0.6,
                    yAnchor: 0.91,
                });

                // 마커에 마우스오버 이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'mouseover', function () {
                    // 마커에 마우스오버 이벤트가 발생하면 커스텀 오버레이를 마커위에 표시합니다
                    customOverlay.setMap(map);
                });

                // 마커에 마우스아웃 이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'mouseout', function () {
                    // 마커에 마우스아웃 이벤트가 발생하면 커스텀 오버레이를 제거합니다
                    customOverlay.setMap(null);
                });
            });
        });
    };
    return (
        <>
            <Script strategy="afterInteractive" type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
                onReady={loadKakaoMap} />
            <div id="map" className="w-full h-screen"></div>
        </>
    )
}