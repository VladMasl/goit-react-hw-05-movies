import { useEffect, useState } from 'react';
import api from 'resource/Api';
import List from 'components/List/List';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await api.trend(page);
        setData(response);
      } catch (error) {
        console.log(error);
        setPage(1);
      }
    };
    data();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <List data={data} />
    </>
  );
};

export default Home;
