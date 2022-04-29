import React from 'react'

const Head = (props) => {

    React.useEffect(() => {
        document.title = `${props.title} | Portfolio`
    }, [props])

  return (
    <>
    </>
  )
}


export default Head;