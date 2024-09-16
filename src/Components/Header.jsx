import React from "react";

export default function Header() {
  return (
    <div style={{ border: "solid 0.1px transparent" }}>
      <div>
        <nav className="nav-desktop">
          <div className="rightSide">
            <div className="logo">
              <i class="fa-solid fa-bars"></i>
              <img src="./Images/MrGalaxyRG.png" alt="Logo" />
            </div>
            <div className="eduSection">
              <span>الأقسام التعليمية</span>
              <span>
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div className="leftSide">
            <button>
              <span>أنشاء الحساب</span>
            </button>
            <button>
              <span>تسجيل الدخول</span>
            </button>
          </div>
        </nav>
      </div>

      <div className="MainContent">
        <div className="LeftContent">
          <img src="./Images/LaptopCoffee.png" alt="" />
        </div>

        <div className="RightContent">
          <div>
            <h1>تعلم البرمجة!</h1>
            <h2> بكل سهولة ومن أيّ مكان؛ بادر بصناعة حلول تقنية للعالم</h2>
            <a href="">
              <button>ابدأ بالتعلم!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
