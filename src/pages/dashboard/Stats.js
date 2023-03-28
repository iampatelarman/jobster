import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartContainer from "../../components/ChartContainer";
import StatsContainer from "../../components/StatsContainer";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;
