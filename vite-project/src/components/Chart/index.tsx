import { useEffect, useMemo, useState } from 'react';
import { Chart } from 'react-charts';

interface PopulationInfo {
  income: number;
  lifeExpectancy: number;
  population: number;
  country: string;
  year: number;
}

export const MyChart = () => {
  const [info, setInfo] = useState([]);
  const data = info.map((el) => {
    return {
      label: el[3],
      data: [
        {
          population: el[2],
          year: el[4],
        },
      ],
    };
  });

  useEffect(() => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://echarts.apache.org/examples/data/asset/data/life-expectancy-table.json',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        credentials: 'same-origin',
      }
    )
      .then((res) => res.json())
      .then((r) => setInfo(r));
  }, []);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.year,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.population,
      },
    ],
    []
  );
  return <Chart options={{ data, primaryAxis, secondaryAxes }} />;
};
