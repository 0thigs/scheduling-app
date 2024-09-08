"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const NextUIProvider = dynamic(
  () => import('@nextui-org/react').then((mod) => mod.NextUIProvider),
  { ssr: false }
);

export const Providers = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};