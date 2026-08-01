"use client";

import { useEffect } from "react";
import { basePath } from "@/lib/config";

export function PwaRegister() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker
      .register(`${basePath}/sw.js`, { scope: `${basePath}/` })
      .catch(() => {
        /* offline support is a progressive enhancement; ignore failures */
      });
  }, []);
  return null;
}
