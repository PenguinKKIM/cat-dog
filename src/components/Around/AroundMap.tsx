import styled from "styled-components";
import AroundShopList from "./AroundShopList";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

function AroundMap() {
  const [state, setState] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null;
    isLoading: boolean;
  }>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (error) => {
          setState((prev) => ({
            ...prev,
            errMsg: error.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])


  return (
    <>
      <MapContainer>
        <Map zoomable={false} center={state.center} style={{
          width: "100%",
          height: "450px",
        }}
          level={3}>
          {!state.isLoading && (
            <MapMarker position={state.center}>
              <div style={{ padding: "5px", color: "#000" }}>
                {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
              </div>
            </MapMarker>
          )}
        </Map>
      </MapContainer>
      <AroundShopList />
    </>
  );
}

const MapContainer = styled.div`
  position: relative;
`;

export default AroundMap;
