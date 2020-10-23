import React, { createContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [font] = useFonts({
    rancho: require("../assets/fonts/Rancho-Regular.ttf"),
    rosario: require("../assets/fonts/Rosario-VariableFont_wght.ttf"),
  });
  const [datas, setDatas] = useState(null);
  if (!font) {
    return null;
  }

  return (
    <DataContext.Provider value={[font, datas, setDatas]}>
      {props.children}
    </DataContext.Provider>
  );
};
