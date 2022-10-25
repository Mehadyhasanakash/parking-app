import React from 'react'

const View = ({datas}) => {

    return datas.map(data=>(
        
        <tr key={data.car}>
            <td>{data.car}</td>
            <td>{data.diver}</td>
            <td>{data.Checkin}</td>
            <td>{data.ChecOut}</td>
                    
        </tr>            
    
))
}

export default View