import React from "react";

export default function TrackCard({ title, image, description, skills }) {
  const myStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="TrackCard-container">
      <div className="firstdiva" style={myStyle}>
        <h3>{title}</h3>
      </div>
      <div className="secondDiva">
        <div className="Track-content">
          <p>{description}</p>
        </div>
        <div>
          <h2 style={{ color: "#7a44fc" }}>المهارات المكتسبة...</h2>
        </div>
        <div>
          {skills.map((skill, index) => {
            return (
              <p key={index}>
                <span className="track-Icon">
                  <i className="fas fa-check"></i> ]
                </span>
                <span>{skill}</span>
              </p>
            );
          })}
        </div>
        <div>
          <span className="track-Icon">
            <i class="fa-solid fa-mug-hot"></i>
          </span>
          <span> الدورات 8</span>

          <span className="track-Icon">
            <i class="fa-regular fa-clock"></i>
          </span>
          <span>21:56:32</span>
        </div>
      </div>
    </div>
  );
}
