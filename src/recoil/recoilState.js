import {atom} from 'recoil';

export const countState = atom({
key: 'countState',
default: 0,
})
 
// 이제 이걸 Counter라는 컴포넌트에서 useRecoilState(countState)로 사용
// useRecoilValue는 상태의 값을 가져오기
// useRecoilState는 상태의 값을 가져오고, 설정함
// useSetRecoilState는 상태의 값을 설정하기
// useResetRecoilState는 인자로 받아온 atom의 state를 default로 초기화함
// selector + get state의 변환, 조합, 필터링, 읽기만 가능 
    // => useRecoilState, useSetRecoilState 사용 불가(set 사용하면 가능)
// selector + 비동기처리 + useRecoilValueLoadable
    // atom 상태가 변할때마다 각 컴포넌트에서 비동기 처리하면 atom을 구독하고 있던 컴포넌트들을 알아서 리렌더링state : hasValue, hasError, loading
// Loadable 객체
// state : hasValue, hasError, loading
// contents : hasValue 일 경우 value, hasError 일 경우 Error 객체, loading 일 경우 Promise