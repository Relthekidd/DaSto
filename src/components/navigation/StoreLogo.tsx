import React from 'react';
import { Link } from 'react-router-dom';
import { branding } from '../../config/branding';

export default function StoreLogo() {
  const { headerLogo, storeName } = branding;

  return (
    <Link to="/" className="flex items-center">
      {headerLogo.url ? (
        <img
          src={headerLogo.url}
          alt={headerLogo.alt}
          width={headerLogo.width}
          height={headerLogo.height}
          className="h-auto"
        />
      ) : (
        <span className="text-2xl font-bold text-green-600">{storeName}</span>
      )}
    </Link>
  );
}