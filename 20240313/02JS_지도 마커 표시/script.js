const lat = 37.5025398;
const lng = 127.0248679;

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.5025398, 127.0248679), // 지도의 중심좌표
    level: 12, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

const clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=nTsTN%2BC%2BY6FYOE6fhE%2FiOljqGFZsP5m3xeNSiaSPwaqFfrNyWH5RkJ2qOZlljNv%2BypgesIo1p2eUKN%2FhH6L9Fg%3D%3D&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const data = json.response.body.items.item;
    console.log(data);

    let markers = [];

    const makeOverListerer = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    const makeOutListerer = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker);

      const infowindow = new kakao.maps.InfoWindow({
        content: data[i].facltNm,
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListerer(map, marker, infowindow)
      );

      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListerer(infowindow)
      );
    }

    clusterer.addMarkers(markers);
  });
