// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
const EditorPanel = ({
  story,
  updateSection,
  selectedFont = "monospace",
  fontSize = "1.6em",
}) => {
  function handleChange(e) {
    const index = e.target.getAttribute("data-id");
    const value = e.target.value.toString().replace(/[\n\r]/gm, "");
    updateSection(value, index);
  }
  const avoidEnter = (e) => {
    // avoiding enter key for the Header
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <>
      {story?.map((section, index) => (
        <div key={section.id}>
          {Object.prototype.hasOwnProperty.call(section, "title") && (
            <div className="flex m-4 p-1 rounded-md min-h-0" key={section.id}>
              <textarea
                name={section.title}
                rows={5}
                cols={50}
                onChange={handleChange}
                onKeyDown={avoidEnter}
                value={section.title}
                data-id={section.id}
                className="flex-grow text-justify ml-2 p-2 text-xl"
                style={{
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: fontSize || "1em",
                }}
              />
            </div>
          )}
          {Object.prototype.hasOwnProperty.call(section, "text") && (
            <div className="flex m-4 p-1 rounded-md" key={section.id}>
              <span className="w-5 h-5 bg-gray-800 rounded-full flex justify-center text-sm text-white items-center p-3 ">
                {index
                  .toString()
                  .split("")
                  .map((num) => `n-${num}`)}
              </span>
              <textarea
                name={section.text}
                rows={5}
                cols={50}
                onChange={handleChange}
                onKeyDown={avoidEnter}
                value={section.text}
                data-id={section.id}
                className="flex-grow text-justify ml-2 p-2 text-sm"
                style={{
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: fontSize || "1em",
                }}
              />
            </div>
          )}
          {Object.prototype.hasOwnProperty.call(section, "end") && (
            <div className="flex m-4 p-1 rounded-md min-h-0" key={section.id}>
              <textarea
                name={section.end}
                rows={5}
                cols={50}
                onChange={handleChange}
                onKeyDown={avoidEnter}
                value={section.end}
                data-id={section.id}
                className="flex-grow text-justify ml-2 p-2 text-sm"
                style={{
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: fontSize || "1em",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default EditorPanel;
EditorPanel.propTypes = {
  story: PropTypes.array,
  updateSection: PropTypes.func,
  selectedFont: PropTypes.string,
  fontSize: PropTypes.string,
};
