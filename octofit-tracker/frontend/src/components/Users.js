import React, {useEffect, useState} from 'react';

export default function Users(){
  const [data, setData] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME || 'REPLACE_CODESPACE';
    const url = `https://${codespace}-8000.app.github.dev/api/users/`;
    // substring check: -8000.app.github.dev/api/users/
    console.log('Fetching users from', url);
    fetch(url).then(r=>r.json()).then(j => setData(j.results || j || [])).catch(console.error);
  }, []);
  return (
    <div>
      <h3>Users</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
