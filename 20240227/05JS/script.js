// 오늘 옆에있는 친구들과 점심!
// 짜장면 돈까스 부대찌개 회덮밥 마라탕
// 상기 메뉴가 후보
// 상기 메뉴 중 랜덤으로 1개 메뉴를 선택해서 웹브라우저 출력 될수 있도록 코드 작성

// 짜장면 돈까스 부대찌개 회덮밥 마라탕 배열로 >> 배열의 인덱스 값을 이용해서 랜덤함수 적용
// 새로고침할때마다 값이 다르게 나오게 출력하기 onload()

const lunchMenu = ["짜장면", "돈까스", "부대찌개", "회덮밥", "마라탕"];

const pickMenu = Math.floor(Math.random() * lunchMenu.length);
const userMenu = lunchMenu[pickMenu];
document.write(userMenu);
