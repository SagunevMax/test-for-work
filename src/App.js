import { useEffect, useState } from "react";
import UseDataUrl from "./hooks/useDataUrl";
import Button from "./button/button";
import TableBody from "./tableBody/tableBody";
import Pagination from "./pagination/Pagination";

function App() {
  // const [info, setInfo] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [buttonClick, setButtonClick] = useState(false);
  const [directionSort, setDirectionSort] = useState(true);
  const [information, setInformation] = useState("");
  const [url, setUrl] = useState("");
  const [totalRow, setTotalRow] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [rowClicked, setRowClicked] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(null);
  // const [buttonDisabled, setButtonDisabled] = useState('');

  const limitCountPage = 50;
  const [
    { info, loading, setInfo, setLoading, isLoaded },
    getData,
  ] = UseDataUrl({
    url,
    buttonClick,
  });

  const lastBlockRow = currentPageNumber * limitCountPage;
  const firstBlockRow = lastBlockRow - limitCountPage + 1;
  const currentBlockRows = info.slice(firstBlockRow, lastBlockRow);

  const sort = (sortElement) => {
    const copyData = info.concat();
    let sortData;
    if (directionSort) {
      sortData = copyData.sort(function (a, b) {
        return a[sortElement] > b[sortElement] ? 1 : -1;
      });
    } else {
      sortData = copyData.sort(function (a, b) {
        return a[sortElement] < b[sortElement] ? 1 : -1;
      });
    }
    setInfo(sortData);
    setDirectionSort(!directionSort);
  };

  const detailInfo = (el) => {
    setInformation(el);
    setRowClicked(true);
  };

  const currentPage = (p) => {
    setCurrentPageNumber(p);
  };

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    setTotalRow(info.length);
    const getTotalPage = totalRow / limitCountPage;
    setTotalPage(getTotalPage);

    currentPage();
  }, [isLoaded, setTotalRow, totalRow, info.length]);

  console.log(currentPageNumber);

  let pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }
  console.log(pages);

  const buttonHandler = (url) => {
    console.log(url);
    setButtonClick(true);
    setUrl(url);
  };

  const onPreviousClick = () => {
    if (currentPageNumber < 2) {
      return;
    }
    setCurrentPageNumber(currentPageNumber - 1);
    console.log(currentPageNumber);
  };

  const onNextClick = () => {
    if (currentPageNumber > totalPage - 1) {
      // setButtonDisabled('disabled')
      return;
    }
    setCurrentPageNumber(currentPageNumber + 1);
    console.log(currentPageNumber);
  };

  return (
    <div className="container">
      {!buttonClick ? (
        <Button buttonHandler={buttonHandler} />
      ) : (
        <TableBody
          info={currentBlockRows}
          detailInfo={detailInfo}
          sort={sort}
          directionSort={directionSort}
          information={information}
          loading={loading}
          rowClicked={rowClicked}
        />
      )}
      <Pagination
        currentPage={currentPage}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        pages={pages}
      />
    </div>
  );
}

export default App;
