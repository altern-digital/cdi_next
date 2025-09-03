import React from "react";

import LightingControlContent from "./component/lighting_control_content";
import { LightingControlHeader } from "./component/lighting_header";

function page() {
  return (
    <div className="min-h-screen">
      <LightingControlHeader />
      <LightingControlContent />
    </div>
  );
}

export default page;
