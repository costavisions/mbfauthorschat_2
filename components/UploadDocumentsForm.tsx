"use client";

import { useState, type FormEvent } from "react";
import DEFAULT_RETRIEVAL_TEXT from "@/data/DefaultRetrievalText";

export function UploadDocumentsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [document, setDocument] = useState(DEFAULT_RETRIEVAL_TEXT);
  
  const ingest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/retrieval/ingest", {
      method: "POST",
      body: JSON.stringify({
        text: document
      })
    });
    if (response.status === 200) {
      setDocument("Uploaded!");
    } else {
      const json = await response.json();
      if (json.error) {
        setDocument(json.error);
      }
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={ingest} className="flex flex-col w-full">
      <textarea
        className="w-full p-2 mb-2 bg-black text-white border border-white rounded"
        value={document}
        onChange={(e) => setDocument(e.target.value)}
        placeholder="Paste your text here"
        rows={3}  // Reduced from 4 to 3
      ></textarea>
      <button 
        type="submit" 
        className="w-1/2 mx-auto px-4 py-2 bg-[#6dc8bb] text-white rounded hover:bg-[#6dc8bb] focus:outline-none focus:ring-2 focus:ring-[#6dc8bb]"
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}