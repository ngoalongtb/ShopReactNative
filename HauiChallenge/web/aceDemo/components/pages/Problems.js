import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const styles = {
    center:{
        textAlign:'center'
    }
};
export default class Problems extends React.Component{
    render(){
        return(
            <div>
                <h1 style={styles.center}>Problems</h1>
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn><b>ID</b></TableRowColumn>
                            <TableRowColumn><b>Name</b></TableRowColumn>
                            <TableRowColumn><b>AC/ALL</b></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>So nguyen to</TableRowColumn>
                            <TableRowColumn>15/30</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Steve Brown</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>5</TableRowColumn>
                            <TableRowColumn>Christopher Nolan</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>


        );
    }
}