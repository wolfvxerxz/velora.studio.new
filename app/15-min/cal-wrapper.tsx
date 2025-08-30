"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalWrapper() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="15min"
      calLink="vuk-m/15min"
      style={{ width: "100%", minWidth: 0, minHeight: 350, overflow: "scroll", display: "block" }}
      config={{ layout: "month_view" }}
    />
  );
}
