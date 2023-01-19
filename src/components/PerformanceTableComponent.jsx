import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Search from './Search';

const PerformanceTableComponent = ({ dataIn,columns}) => {

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                // backgroundColor: '#C5C5C5',
                fontWeight: 'bold'

            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };


    const [search, setsearch] = useState("");
    const [filteredDta, setfilteresData] = useState(dataIn);
  
    useEffect(() => {
      const result = dataIn.filter((itr) => {
        return itr.team.toLowerCase().match(search.toLowerCase());
      });
      setfilteresData(result);
  
      if (search.length === 0) {
        setfilteresData(dataIn);
      }
    }, [search, filteredDta,dataIn]);
  
    
    

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredDta}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        pagination
        highlightOnHover
        customStyles={customStyles}
        subHeader
        subHeaderComponent={<Search change={(e) => setsearch(e.target.value)} value={search} />}
      />
    </div>
  )
}

export default PerformanceTableComponent
