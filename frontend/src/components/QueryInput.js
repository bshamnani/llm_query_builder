import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QueryInput = props => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [table, setTable] = useState('');
    

    const callAPI = props => {
        navigate('/result/' + query + '/' + table);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { query, table };
        console.log(data);
        callAPI({query, table});
    }

    return (
        <div className="queryInput">
            <h2>Input fields</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter User Query:</label>
                <textarea
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                ></textarea>
                <label>Select table:</label>
                <select
                    value={table}
                    onChange={(e) => setTable(e.target.value)}
                >
                    <option value="N/A">Select table</option>
                    <option value="TestRunDetails">tests</option>
                    <option value="DeploymentMetadata">deployments</option>
                    <option value="Sybase_Results">sybase</option>
                    <option value="SockPerf_Results">sockperf</option>
                    <option value="CassandraTestSummary">cassandra</option>
                    <option value="TestInfraMetadata">infra</option>
                </select>
                <button>Execute Query</button>
                {/* <p>{ table }</p>
                <p>{ query }</p> */}
            </form>
        </div>
    );
}

export default QueryInput;