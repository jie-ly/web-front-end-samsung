메일 발송했습니다

⭕ Cart 컨텍스트를 생성합니다.

⭕ Cart 컨텍스트 프로바이더를 사용해 App 내부 Cart 컴포넌트에 카트 상태 및 업데이트 함수를 공급합니다.

⭕ Cart 컨텍스트 값(value)을 컴포넌트에서 바로 꺼내 사용할 수 있도록 useCart 커스텀 훅을 작성합니다.

❌ Props 드릴링 된 Cart 상태 및 업데이트 함수를 각 컴포넌트에서 걷어냅니다. (정리)

❌ useCart 훅을 사용해 카트 상태 및 업데이트 함수가 필요한 컴포넌트에서 꺼내 사용합니다.


수정한 부분: 

-src/contents/cart.jsx

-src/components/index.js

-src/app/App.js

-src/components/Counter/Counter.js
