import { Pane, Heading, Table, TableHeaderCell } from 'evergreen-ui';
import React, { Component } from 'react'
import XLSX from 'xlsx'

class Import extends Component {
  constructor(props) {
    super(props)
    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.tableQB = this.tableQB.bind(this)
    this.state = {
      userRankings: [],
      columns: []
    }
  }

	handleFile = (file) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			/* Parse data */
			const ab = e.target.result;
			const wb = XLSX.read(ab, {type:'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const QBs = XLSX.utils.sheet_to_json(ws, {header: 1, range: 'A2:B10'});
			/* Update state */
      //this.setState({userRankings: data})
      this.setState({userRankings: QBs})
    console.log(this.state.userRankings)
		};
		reader.readAsArrayBuffer(file);
	}

  handleChange = (e) => {
		const files = e.target.files;
		if(files && files[0]) this.handleFile(files[0]);
	}

  tableQB() {
    const { userRankings } = this.state
    const regex = new RegExp('Tier [0-50]')
    return (
      <Table>
        <Table.Head>
          <TableHeaderCell>QB</TableHeaderCell>
          <TableHeaderCell>RB</TableHeaderCell>
        </Table.Head>
        <Table.Body width={250}>
          {userRankings.map((row) => {
            return (
              <Table.Row key={row}>
                {regex.test(row[0]) ? <Table.TextCell><Heading size={700}>{row[0]}</Heading></Table.TextCell> : <Table.TextCell>{row[0]}</Table.TextCell>}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    )
  }
  
  render() {
    const SheetJSFT = ["xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", 
                       "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", 
                       "wb*", "wq*", "html", "htm"].map(x => `.${x}`).join(",")
    return (
      <Pane
        minHeight='100vh'
        width='100vw'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#00022E'
      >
        <Pane
          background='tint2'
          minHeight={250}
          minWidth={800}
          display='flex'
          justifyContent='flex-start'
          alignItems='center'
          flexDirection='column'
          borderRadius={16}
          border='default'
        >
          <Pane id='user-card' padding={16} display='flex' flexDirection='column' alignItems='center' flex={1}>
            <Heading size={700} marginTop={8}>Import your tier-based rankings</Heading>
            <input type='file' id='file' accept={SheetJSFT} onChange={this.handleChange} />
          </Pane>
          <Pane padding={16} display='flex' flexDirection='column' alignItems='center' flex={1}>
            {this.tableQB()}
          </Pane>
        </Pane>
      </Pane>
    )
  }
}

export default Import;
