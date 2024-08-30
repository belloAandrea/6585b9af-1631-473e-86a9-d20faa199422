import React, { useState } from 'react';

export default function ExistingFile() {
  const [state, setState] = useState('Hello, World!');
  return <h1>{state}</h1>;
}