import { useState } from "react";
export default function useStory() {
  const [story, setStory] = useState([]);
  const updateSection = (text, index) => {
    const section = story[index - 1];

    let newSection = {};
    if (Object.prototype.hasOwnProperty.call(section, "title")) {
      newSection = {
        id: section.id,
        title: text,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "text")) {
      newSection = {
        id: section.id,
        img: section.img,
        text: text,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "end")) {
      newSection = {
        id: section.id,
        end: text,
      };
    }
    const newStories = story.map((section) =>
      section.id !== newSection.id ? section : newSection
    );

    let newData = { ...story };
    newData = newStories;
    setStory(newData);
  };
  return {
    state: { story },
    actions: { setStory, updateSection },
  };
}
