"use client";

import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("./editor"), { ssr: false });

export default DynamicEditor;
