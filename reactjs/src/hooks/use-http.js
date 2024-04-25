import { useEffect, useState } from "react";

const useHttp = (configData) => {
  const [data, setData] = useState(null);
  console.log(configData);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const data1 = await fetch(configData);
        const data2 = await data1.json();
        setData(data2);
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };
    getAllData();
  }, []);

  return data;
};
export default useHttp;

