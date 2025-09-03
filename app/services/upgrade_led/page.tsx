import React from "react";

import { UpgradeLedHeader } from "./component/upgrade_led_header";
import UpgradeLedContent from "./component/upgrade_led_content";

function page() {
  return (
    <div className="min-h-screen">
      <UpgradeLedHeader />
      <UpgradeLedContent />
    </div>
  );
}

export default page;
