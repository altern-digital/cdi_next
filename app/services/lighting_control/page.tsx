import React from "react";

import { ServicesItemHeader } from "../component/services_item_header";
import ServicesItemContent from "../component/services_item_content";

function page() {
  return (
    <div className="min-h-screen">
      <ServicesItemHeader />
      <ServicesItemContent />
    </div>
  );
}

export default page;
