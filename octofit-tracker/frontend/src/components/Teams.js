import React, {useEffect, useState} from 'react';

function formatValue(v){
  if (v === null || v === undefined) return '';
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v);
}

export default function Teams(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    const codespace = process.env.REACT_APP_CODESPACE_NAME || 'REPLACE_CODESPACE';
    const url = `https://${codespace}-8000.app.github.dev/api/teams/`;
    console.log('Fetching teams from', url);
    fetch(url).then(r=>r.json()).then(j => setData(j.results || j || [])).catch(console.error).finally(()=>setLoading(false));
  };

  useEffect(()=>{ fetchData(); }, []);

  const keys = data && data.length > 0 && typeof data[0] === 'object' ? Object.keys(data[0]) : [];

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Teams</h3>
        <p className="text-muted">Endpoint contains <code>-8000.app.github.dev/api/teams/</code></p>
        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={fetchData} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh'}</button>
        </div>

        {data.length === 0 ? (
          <div className="alert alert-info">No teams found.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>{keys.map(k => <th key={k}>{k}</th>)}</tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx}>{keys.map(k => <td key={k}>{formatValue(item[k])}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
