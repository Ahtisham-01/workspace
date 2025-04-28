"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import MoonPay components to avoid SSR issues
const MoonPayProvider = dynamic(
  () => import("@moonpay/moonpay-react").then((mod) => mod.MoonPayProvider),
  { ssr: false }
);

const MoonPayBuyWidget = dynamic(
  () => import("@moonpay/moonpay-react").then((mod) => mod.MoonPayBuyWidget),
  { ssr: false }
);

const MoonPayWidget = ({
  apiKey,
  baseCurrencyCode = "usd",
  baseCurrencyAmount = "100",
  defaultCurrencyCode = "eth",
  redirectURL = "https://moonpay.com",
}) => {
  return (
    <MoonPayProvider apiKey={apiKey}>
      <MoonPayBuyWidget
        variant="embedded"
        baseCurrencyCode={baseCurrencyCode}
        baseCurrencyAmount={baseCurrencyAmount}
        defaultCurrencyCode={defaultCurrencyCode}
        redirectURL={redirectURL}
      />
    </MoonPayProvider>
  );
};

export default MoonPayWidget;