import './Logo.scss';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

export default function Logo() {
  return (
    <div className="logo">
      <p className="logo__b">B</p>
      <p className="logo__j">J</p>
    </div>
  );
}
