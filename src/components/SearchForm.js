import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchterm}=useGlobalContext();
  const searchValue=React.useRef('');
  React.useEffect(()=>{
    searchValue.current.focus()
  },[]);
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  const setStermF=()=>{
    setSearchterm(searchValue.current.value);
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handlesubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your favourite Cocktail
          </label>
          <input type="text" id="name"
           ref={searchValue} onChange={setStermF} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
