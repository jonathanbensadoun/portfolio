import './Logo.scss';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

export default function Logo() {
  return (
    <div className="flex">
      <p className="text-5xl font-bold mr-2 animate-slide-down text-black-shadow">
        B
      </p>

      <p className="text-5xl font-bold ml-6 mt-3 animate-slide-up absolute logo-j text-black-shadow">
        J
      </p>
    </div>
  );
}
