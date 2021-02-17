import { Fragment } from "react";
import DetailInfo from "../detailInfo/DetailInfo";
import Loader from '../loader/Loader';
import Table from "../table/Table";

const TableBody = ({info, loading, detailInfo, sort, directionSort, rowClicked, information}) => {
  return (
  loading ? 
    <Loader />
   : 
    <Fragment>
      <Table
        info={info}
        detailInfo={detailInfo}
        sort={sort}
        directionSort={directionSort}
      />
      {rowClicked ? 
      <DetailInfo information={information} />
      : null}
    </Fragment>
  );
};

export default TableBody;
