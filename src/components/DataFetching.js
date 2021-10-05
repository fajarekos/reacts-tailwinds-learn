import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  })
  return (
    <div className="box-border px-3 py-2 border-gray-400">
      <div className="border-gray-400 divide-y text-left">
        {
          posts.map(post => <p className="text-blue-700 px-3 py-2" key={post.id}>{ post.title }</p>)
        }
      </div>
    </div>
  )
}

export default DataFetching
