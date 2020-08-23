import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./SearchInput.module.scss";
import { connect } from "react-redux";
import { open_hint } from "./../../Redux/action/hint.action";

const languages = [
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Pawan",
    year: 2012,
  },
  {
    name: "Rahul",
    year: 2012,
  },
  {
    name: "Shive",
    year: 2012,
  },
  {
    name: "Body",
    year: 2012,
  },
];

const AutoComplete = (props) => {
  const { autoShow, open_hint } = props;
  const [filteredOptions, setFillteredOption] = useState([]);

  const [userInput, setUserInput] = useState("");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          open_hint(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onChange = (e) => {
    const userInputs = e.currentTarget.value;
    setUserInput(userInputs);
    if (userInputs) {
      const filteredOption = languages.filter(
        (optionname) =>
          optionname.name
            .toLowerCase()
            .indexOf(e.currentTarget.value.toLowerCase()) > -1
      );
      let searchDate = [];
      filteredOption.forEach((item) => {
        if (searchDate.indexOf(item.name) === -1) {
          searchDate.push(item.name);
        }
      });

      setFillteredOption(searchDate.slice(0, 10));
      open_hint(true);
    }
  };
  const optionboxClick = () => {
    open_hint(true);
  };
  const onClick = (e) => {
    setFillteredOption([]);
    open_hint(false);
    setUserInput(e.currentTarget.innerText);
  };
  let optionList;

  if (autoShow && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul
          className={style.option}
          style={{ listStyle: "none", padding: "10px 20px " }}
        >
          {filteredOptions.map((optionName, i) => {
            return (
              <li
                className={style.optionlist}
                key={optionName}
                onClick={onClick}
              >
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className='search'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            className='searchterm'
            placeholder='Enter What You Want to Search'
            onChange={onChange}
            value={userInput}
            onFocus={onChange}
          />
          <button type='submit' className='searchbtn'>
            <FaSearch />
          </button>
          <div className='clear'></div>
        </form>
        {filteredOptions.length ? (
          <div className='option-container' ref={wrapperRef}>
            {optionList}
          </div>
        ) : null}
      </div>

      <style jsx>{`
        .option-container {
          background: #ffff;
          position: absolute;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;

          width: 100%;

          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          z-index: 1050;
        }

        .search {
          width: 100%;
          position: relative;
        }

        .searchterm {
          width: 100%;
          // border: 1px solid teal;
          height: 40px;
          padding: 11px;
          // position: absolute;

          background: #f5f5f5;
        }
        .searchterm :focus {
          outline: none;
        }
        .searchbtn {
          // margin-top: -50px;
          float: right;
          width: 50px;
          height: 40px !important;
          outline: 0;
          right: 0;
          background: teal;
          // border: 1px solid teal;
          text-align: center;
          color: #ffff;
          cursor: pointer;
          font-size: 20px;
          padding-left: 15px;
          position: absolute;
        }
        .clear {
          clear: both;
        }
      `}</style>
    </>
  );
};

// const clickOutsideConfig = {
//   handleClickOutside: () => AutoComplete.handleClickOutside,
// };
const getStateToProps = (state) => ({
  autoShow: state.search_hint.hint,
});
const getDispathchToProps = { open_hint };

export default connect(getStateToProps, getDispathchToProps)(AutoComplete);
