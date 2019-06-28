import React, { Fragment} from 'react';
import styled from 'tachyons-components'


const Wrapper = styled('div')`
`
const Table = styled('table')`
mt4 f5 w-100 mw8 center pb5
`
const TableHeader = styled('th')`
fw6 bb b--black-20 pb2 bg-white tc w-20
`
const TableCell = styled('td')`
pv3 pr3 bb b--black-20 tc w-30 
`

const TableGen = (props) => 
  (
        <Wrapper>
        <Table> 
            <thead>
            <tr>
            <Fragment>
            {props.headers.map(item => (
            <TableHeader>{item.hd}</TableHeader>    
            ))}
            </Fragment>
            </tr>
            </thead>
            <tbody>
            <Fragment>
            {props.items.map(item => (
            <tr>
                <TableCell>{item.name}</TableCell>
   
            </tr>
            ))}
            </Fragment>
            </tbody>
            
        </Table>
        </Wrapper>

    );


export default TableGen;
