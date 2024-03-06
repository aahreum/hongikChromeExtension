const menuDiv = document.createElement("div");
menuDiv.classList.add("extensionsMenu");

menuDiv.textContent = "바로가기 메뉴 >";

const menuLinks = [
  { text: "클래스넷", href: "https://cn.hongik.ac.kr/stud/" },
  { text: "전자출결", href: "https://at.hongik.ac.kr/stud01.jsp" },
  { text: "증명서발급", href: "https://www.hongik.ac.kr/kr/life/certificate-issuance.do" },
  { text: "중앙도서관", href: "https://honors.hongik.ac.kr/" },
];

menuLinks.forEach((linkInfo) => {
  let newLink = document.createElement("a");
  newLink.href = linkInfo.href;
  newLink.textContent = linkInfo.text;
  menuDiv.appendChild(newLink);
});

const styleElement = document.createElement("style");
styleElement.textContent = `.extensionsMenu {
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #999;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 24px;
  width: fit-content;
  padding: 24px;
  border-radius: 16px;

  z-index: 99;

  a {
    display: block;
    text-decoration: none;
    color: black;
    font-size: 16px;
  }

  a:hover {
    color: #0025d3;
  }
}`;
document.head.appendChild(styleElement);
document.body.appendChild(menuDiv);
