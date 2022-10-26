import React, { useEffect, useState } from "react";
import WarningModal from "../components/WarningModal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Root({ children }) {
  const [hasReadWarning, setHasReadWarning] = useState(false);

  useEffect(() => {
    const checkRead = localStorage.getItem("siteWarning");
    setHasReadWarning(JSON.parse(checkRead));
  }, [hasReadWarning]);

  const hideWarning = () => {
    localStorage.setItem("siteWarning", "true");
    setHasReadWarning(true);
  };

  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      {!hasReadWarning && siteConfig.customFields.warningText && (
        <WarningModal
          warningText={siteConfig.customFields?.warningText}
          hideWarning={hideWarning}
        />
      )}

      {children}
    </>
  );
}
