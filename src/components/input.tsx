"use client";

import { Box, CloseButton, Input, Tag, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";

export const FileInput = () => {
  return (
    <Box
      style={{
        display: "block",
        padding: "20px 20px",
        minHeight: "150px",
        boxSizing: "border-box",
        border: "2px dashed grey",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <div style={{ textAlign: "center", margin: "2em 0" }}>
        <button
          style={{
            WebkitAppearance: "button",
            textTransform: "none",
            border: "none",
            color: "inherit",
            background: "none",
          }}
          type={"button"}
        >
          Drop files here to upload
        </button>
      </div>
    </Box>
  );
};

export const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const trimmedValue = value.trim();
      if (trimmedValue !== "") {
        setTags([...tags, trimmedValue]);
        setValue("");
      }
    }
  };

  const handleTagDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <Box display="flex" flexWrap="wrap" alignItems="center">
      <UnorderedList id="tags" listStyleType={"none"} p={0} m={0}>
        {tags.map((tag, index) => (
          <Tag key={index} mr={2} mb={2}>
            {tag}
            <CloseButton size={"sm"} onClick={() => handleTagDelete(index)} />
          </Tag>
        ))}
      </UnorderedList>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </Box>
  );
};
