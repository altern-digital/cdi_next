import React from "react";

import { LightingApplicationHeader } from "./component/lighting_application_header";
import LightingApplicationContent from "./component/lighting_aaplication_content";

function page() {
  return (
    <div className="min-h-screen">
      <LightingApplicationHeader />
      <LightingApplicationContent />
    </div>
  );
}

export default page;
