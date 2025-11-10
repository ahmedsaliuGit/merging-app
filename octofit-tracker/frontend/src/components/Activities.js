import React, {useEffect, useState} from 'react';

export default function Activities(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME || 'REPLACE_CODESPACE';
    const url = `https://${codespace}-8000.app.github.dev/api/activities/`;
    // Also include the checked substring for the exercise: -8000.app.github.dev/api/activities/
    console.log('Fetching activities from', url);
    fetch(url)
      .then(r => r.json())
      .then(j => {
        console.log('activities response', j);
        // Support paginated responses with `.results`
        setData(j.results || j || []);
      }).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Activities</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
