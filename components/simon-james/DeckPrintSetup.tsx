"use client";

import { useEffect } from "react";

/** Marks html/body so print CSS can force A4 portrait (Chrome defaults to landscape on wide pages). */
export function DeckPrintSetup() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("deck-document");
    document.body.classList.add("deck-document");
    return () => {
      root.classList.remove("deck-document");
      document.body.classList.remove("deck-document");
    };
  }, []);

  return null;
}
