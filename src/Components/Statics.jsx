import React from "react";
import Card from "./Card";
export default function Statics() {
  return (
    <div className="secondSection" >
      <div className="leftStatics">
        <Card
          headLine="محتوى مجاني ودائم"
          subLine="إتاحة الوصول لجميع المحتوى التعليمي: المسارات، الدورات، الكيفيات؛ مجانًا و بشكل دائم."
          image="learn1"
        />
        <Card
          headLine="محتوى متكامل باللغة العربية"
          subLine="جميع محتوى منصة سطر متاح باللغة العربية، في أبرز مجالات التقنية والبرمجة"
          image="learn3"
        />
      </div>
      <div className="rightStatics">
        <Card
          headLine="تعلّم في أي وقت ومن أي مكان!"
          subLine="فرصة الوصول للمحتوى التعليمي في مختلف الأوقات ومن أيّ مكان"
          image="learn2"
        />
        <Card
          headLine="تعلم أحدث التقنيات"
          subLine="محتوى تعليمي متجدّد بأحدث الممارسات التقنية لمواكبة متطلبات سوق العمل."
          image="learn4"
        />
      </div >

      {/* <div className="card">
          <div>
            <img src="./Images/learn1.png" alt="" />
          </div>
          <h2>محتوى مجاني و دائم</h2>
          <p>إتاحة الوصول لجميع المحتوى التعليمي؛ مجانا و بشكل دائم</p>
        </div>
        <div className="card">
          <div>
            <img src="./Images/learn3.png" alt="" />
          </div>
          <h2>محتوى مجاني و دائم</h2>
          <p>إتاحة الوصول لجميع المحتوى التعليمي؛ مجانا و بشكل دائم</p>
        </div> */}

      {/* <div className="firstLeftCard">
          <div id="learn3">
            <img src="./Images/learn3.png" alt="" />
          </div>
          <h2>محتوى متكامل باللغة العربية</h2>
          <p>جميع محتوى منصة شطر متاح باللغة العربية،في جميع مجالات البرمجة</p>
        </div>
      </div>
      <div className="rightStatics">
        <div className="rightCards">
          <div>
            <img src="./Images/learn2.png" alt="" />
          </div>
          <h2>تعلّم في أي وقت ومن أي مكان!</h2>
          <p>فرصة الوصول للمحتوى التعليمي في مختلف الأوقات ومن أيّ مكان.</p>
        </div>
        <div className="rightCards">
          <div>
            <img src="./Images/learn4.png" alt="" />
          </div>
          <h2>تعلم أحدث التقنيات</h2>
          <p>محتوى تعليمي متجدّد بأحدث الممارسات التقنية لمواكبة متطلبات سوق العمل.</p>
        </div> */}

    </div>
  );
}
