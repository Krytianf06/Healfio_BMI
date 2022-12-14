import React from "react";
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg  viewBox="1 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.5539 28.5936C28.3164 28.4347 28.7705 27.6368 28.3916 26.9563C27.5563 25.4561 26.2404 24.1378 24.557 23.1332C22.389 21.8393 19.7327 21.1379 17 21.1379C14.2673 21.1379 11.611 21.8393 9.44297 23.1331C7.75961 24.1378 6.44371 25.4561 5.60843 26.9563C5.22954 27.6368 5.68365 28.4347 6.44616 28.5936C13.4073 30.0444 20.5927 30.0444 27.5539 28.5936Z" fill="#293C32"/>
  <circle cx="17" cy="11.4828" r="6.89655" fill="#293C32"/>
  </svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;