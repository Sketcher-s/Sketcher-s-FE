import { selector } from 'recoil';
import { canvasSizeState } from './atoms';

// 셀렉터 정의
// export const calculatedCanvasSizeState = selector({
//   key: 'calculatedCanvasSizeState',
//   get: ({ get }) => {
//     const { width, height } = get(canvasSizeState);
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const newSize = Math.min(screenWidth, screenHeight) * 0.657;
//     return { width: `${newSize}px`, height: `${newSize}px` };
//   },
// });