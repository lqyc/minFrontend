import React from "react";
import hostMap from "../hostMap";
import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Vue3Demo() {
  const location = useLocation();
  const navigation = useNavigate();
  const path = location.pathname.replace("/vue3Demo-sub", "").replace("/vue3Demo", "");////
  const vue3DemoUrl = hostMap("//localhost:7800/");
    // 告诉子应用要跳转哪个路由
  path && WujieReact.bus.$emit("vue3-router-change", path);
  const props = {
    jump: (name) => {
      navigation(`/${name}`);
    },
  };
  return (
    <WujieReact
      width="100%"
      height="100%"
      name="vue3Demo"
      url={vue3DemoUrl}
      sync={!path}
      props={props}
    ></WujieReact>
  );
}
