import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/actions/filters";
import { PropTypes } from "prop-types";

const Sort = React.memo(({ availableSort }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      handleClickOnOutside(e);
    });
  }, []);

  const sortBy = useSelector(({ filters }) => filters.sortBy);

  const sortName = availableSort.filter((sortItem) => {
    return sortItem.type === sortBy;
  })[0].name;

  const [isVisible, setIsVisible] = React.useState(false);
  const sortByElem = React.useRef(null);

  const choiceSortBy = (sortObj) => {
    dispatch(setSortBy(sortObj));
  };

  const handleClickOnOutside = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortByElem.current)) {
      setIsVisible(false);
    }
  };
  const hadleClickOnSorting = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sorting" onClick={hadleClickOnSorting} ref={sortByElem}>
      <div className={classNames("sorting__label", { active: isVisible })}>
        <span className="sorting__title">Сортировка по :</span>
        <span className="sorting__value">{sortName}</span>
      </div>
      {isVisible && (
        <ul name="" id="" className="sorting__action active">
          {availableSort.map((sort, index) => {
            return (
              <li
                key={`${sort.name}_${index}`}
                className={classNames({ active: sort.type === sortBy })}
                onClick={() => {
                  choiceSortBy({ sortBy: sort.type, order: sort.order });
                }}
              >
                {sort.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

Sort.propType = {
  availableSort: PropTypes.arrayOf(PropTypes.object),
};

export default Sort;
