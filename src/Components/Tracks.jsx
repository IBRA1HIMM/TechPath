import React from "react";
import TrackCard from "./TrackCard";
import TrackImage1 from "../TrackImages/cat.png";
import TrackImage2 from "../TrackImages/funny.png";
import TrackImage3 from "../TrackImages/funny2.png";

export default function Tracks() {
  const skill1 = [
    "تصميم و تطوير تطبيقات الويب",
    "التعاون بفعالية مع مطوري ومصممي الويب الآخرين في بيئة الفريق.",
    "مواكبة أحدث الاتجاهات والتقنيات في تطوير الويب",
  ];
  const skill2 = [
    "تحديد التهديدات والثغرات الأمنية الشائعة.",
    "تنفيذ إجراءات أمنية أساسية لحماية الأنظمة والشبكات.",
    "إجراء تقييمات للمخاطر ووضع استراتيجيات للتخفيف منها.",
  ];
  return (
    <div>
      <div className="track-heading">
        <h2>المسارات</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          justifyContent: "space-around",
          paddingTop: "1rem",
        }}
      >
        <TrackCard
          image={TrackImage1}
          title="مسار إتقان تطوير الويب"
          description="تم تصميم هذا المسار الشامل لتزويدك بالمهارات والمعرفة اللازمة للتميز
            في تطوير الويب..."
          skills={skill1}
        />
        <TrackCard
          image={TrackImage2}
          title="مسار إتقان الأمن السيبراني"
          description="يهدف هذا المسار إلى تعريف المتعلمين بالمفاهيم والمهارات الأساسية في مجال الأمن السيبراني..."
          skills={skill2}
        />
        <TrackCard
          image={TrackImage3}
          title="مسار إتقان تحليل البيانات"
          description="يهدف مسار تحليل البيانات إلى تزويد المتعلمين بالمهارات والمعرفة الأساسية لاستخراج رؤى قيمة ..."
          skills={skill2}
        />
      </div>
    </div>
  );
}
