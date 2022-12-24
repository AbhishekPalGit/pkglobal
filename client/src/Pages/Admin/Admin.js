import React from 'react'

const Admin = () => {
  return (
    <div>
        <form method='POST' action='/openmyadmin/' encType='multipart/form-data'>
            <input type="file" name="file"></input>
            <input type="submit" name="upload"></input>

        </form>
    </div>
  )
}

export default Admin