import React from 'react'
import { Helmet } from 'react-helmet'
import { Select } from 'antd'
import Surah from './data.json'
import CreateWord from './CreateWord'

const { Option } = Select
class CardsBasicCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectValue: 'Choose Surah',
    }
    this.word_key = -1
  }

  onChange = selectValue => {
    this.setState({
      selectValue,
    })
  }

  render() {
    const { selectValue } = this.state

    return (
      <div>
        <Helmet title="Al Quran" />
        <div className="air__utils__heading">
          <h5>
            <span className="mr-3">Edit Projects</span>
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header card-header-flex align-items-center">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <div className="mb-0 width-300">
                    <Select value={selectValue} onChange={this.onChange} style={{ width: 300 }}>
                      {Surah.map(data => {
                        return (
                          <Option key={data.surahNumber} value={data.surahNumber}>
                            {`${data.surahNumber} - ${data.surahName}`}
                          </Option>
                        )
                      })}
                    </Select>
                  </div>
                </div>
              </div>
              <CreateWord noSurah={selectValue} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardsBasicCards
