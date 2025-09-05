import React from 'react'
import './Table.css'
const Table = ({ data }) => {
  return (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th className='column-narrow'>Download</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td className="column-narrow download-cell">
                            <a href={item.link} target='_blank'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="download-icon"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25a.75.75 0 01.75.75v11.69l3.545-3.655a.75.75 0 011.09 1.05l-4.75 5.168a.75.75 0 01-1.09 0l-4.75-5.168a.75.75 0 011.09-1.05L11.25 14.44V3a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25a.75.75 0 01.75.75v11.69l3.545-3.655a.75.75 0 011.09 1.05l-4.75 5.168a.75.75 0 01-1.09 0l-4.75-5.168a.75.75 0 011.09-1.05L11.25 14.44V3a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M3.75 18a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 3a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table