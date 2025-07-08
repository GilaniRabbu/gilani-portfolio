import React from "react";

const Text = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Dark Theme Text Effect */}
      <div className="bg-black p-8 rounded-lg border border-gray-700">
        <h3
          className="text-4xl md:text-5xl font-black text-center"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white",
            textStroke: "2px white",
            letterSpacing: "0.1em",
          }}
        >
          THE BRIGADE
        </h3>
        <p className="text-gray-400 text-center mt-4">
          CSS text-stroke effect recreating the bold outline style
        </p>
      </div>

      {/* Light Theme Text Effect */}
      <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
        <p className="text-gray-600 text-center mt-4">
          Pink outlined text effect matching your food branding design
        </p>
      </div>
    </div>
  );
};

export default Text;
