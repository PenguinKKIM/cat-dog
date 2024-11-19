import styled from "styled-components";
import AroundShopList from "./AroundShopList";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function AroundMap() {
  return (
    <MapContainer>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <AroundShopList />
    </MapContainer>
  );
}

const MapContainer = styled.div`
  position: relative;
`;

// const AroundMapConatiner = styled.div`
//   width: 100%;
//   height: 18rem;
//   background-color: cornflowerblue;
// `;

export default AroundMap;
