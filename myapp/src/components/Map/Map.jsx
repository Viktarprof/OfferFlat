import React from "react";

function Map() {
  return (
    <div style={{ width: "100%" }}>
      <iframe
          style={{
            width: "100%",
            height: "300px",
            border: "0",
            scrolling: "no",
            marginHeight: "0",
            marginWidth: "0"
          }}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jurowiecka%2015+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >

      </iframe>
    </div>
  );
}

export default Map;
