import './Logo.scss';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

export default function Logo() {
  return (
    <div className="flex">
      <p className="text-5xl font-bold animate-slide-down">B</p>
      <p className="text-5xl font-bold mt-4 animate-slide-up">J</p>
    </div>
  );
}
