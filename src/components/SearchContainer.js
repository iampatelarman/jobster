import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const SearchContainer = () => {
  const { search, searchStatus, searchType, sort, sortOptions } = useSelector(
    (store) => store.allJobs
  );
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Filter</h4>
        <div className="form-center">
          <FormRow
            type={"text"}
            value={search}
            name="search"
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleInput={handleSearch}
            options={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleInput={handleSearch}
            options={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleInput={handleSearch}
            options={sortOptions}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => dispatch(clearFilters())}
          >
            clear filter
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
