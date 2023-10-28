"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import D3WordCloud from "react-d3-cloud";

type CustomWordCloudProps = {};

const data = [
  { text: "hey", value: 3 },
  { text: "kamu", value: 5 },
  { text: "membuat", value: 7 },
  { text: "aku", value: 9 },
  { text: "bahagia", value: 11 },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWordCloud: FC<CustomWordCloudProps> = () => {
  const theme = useTheme();
  return (
    <D3WordCloud
      height={550}
      data={data}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme == "dark" ? "white" : "black"}
    />
  );
};

export default CustomWordCloud;
