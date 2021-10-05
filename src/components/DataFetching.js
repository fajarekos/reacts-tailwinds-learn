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
  },[])
  return (
    <div className="flex flex-wrap box-border px-3 py-2 border-gray-400">
      {
        posts.map(post => 
          <div className="text-gray-600 text-leftgit px-3 py-2 w-1/5 space-x-2 border-2" key={post.id}>{ post.body }</div>
        )
      }
    </div>
  )
}

export default DataFetching
