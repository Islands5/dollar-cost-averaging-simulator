import React, { FC, useEffect, useState } from 'react';

import { ChartData, ChartOptions } from 'chart.js';

import { getRandomInt } from '../utils/random'

import { StockGraph } from '../graphs/stock_graph'
import { ReturnGraph } from '../graphs/return_graph'

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const TopPage: FC = () => {
  const defaultNumberOfData = 35
  const defaultDistData = 10
  const defaultNumberOfDigit = 100
  const defaultOffset = 300
  const defaultGrowthRate = 3
  const defaultType = "bar"
  const options: ChartOptions = {
    scales: {
      yAxes: {
        min: 0
      }
    }
  }

  const [numberOfData, setNumberOfData] = useState(defaultNumberOfData)
  const [distData, setDistData] = useState(defaultDistData)
  const [numberOfDigit, setNumberOfDigit] = useState(defaultNumberOfDigit)
  const [offset, setOffset] = useState(defaultOffset)
  const [growthRate, setGrowthRate] = useState(defaultGrowthRate)
  const [data, setData] = useState<ChartData>({labels: [], datasets: []})
  const [graphType, setGraphType] = useState(defaultType)

  let labels: string[] = []
  let distValues: number[] = []

  const handleStockSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { target } = event;

    if (!(target instanceof HTMLFormElement)) {
      return; // or throw new TypeError();
    }

    event.preventDefault()

    setNumberOfData(Number(target.querySelector<HTMLInputElement>('#js-number-of-data')!.value))
    setDistData(Number(target.querySelector<HTMLInputElement>('#js-dist-data')!.value))
    setNumberOfDigit(Number(target.querySelector<HTMLInputElement>('#js-number-of-digit')!.value))
    setOffset(Number(target.querySelector<HTMLInputElement>('#js-offset')!.value))
    setGrowthRate(Number(target.querySelector<HTMLInputElement>('#js-growth-rate')!.value))
  }

  const handleGraphTypeChange =  (event: React.ChangeEvent<{ value: unknown }>) => {
    setGraphType(event.target.value as string);
  }; 

  const calcValues = () => {
    labels = []

    for(let i = 1; i <= numberOfData; i++) {
      labels.push(`${i}??????`)
    }

    distValues = labels.map((_, index) => {
      const randomElement = getRandomInt(0, distData) * numberOfDigit
      const growthElement = growthRate * 0.01 * numberOfDigit * index
      return  Math.abs(randomElement + growthElement + offset)
    })
    setData({
      labels,
      datasets: [{
        label: '??????A?????????',
        data: distValues,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 3,
        tension: 0
      }]
    })
  }

  useEffect(() => {
    calcValues()
  }, [])

  useEffect(() => {
    calcValues()
  }, [numberOfData, distData, numberOfDigit, offset, growthRate])

  const [money, setMoney] = useState(100000)
  const [returnData, setReturnData] = useState<ChartData>({labels: [], datasets: []})
  const [returnGraphType, setReturnGraphType] = useState(defaultType)

  const handleItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { target } = event;

    if (!(target instanceof HTMLFormElement)) {
      return; // or throw new TypeError();
    }

    event.preventDefault()

    setMoney(Number(target.querySelector<HTMLInputElement>('#js-money')!.value))
  }
  
  const handleReturnGraphTypeChange =  (event: React.ChangeEvent<{ value: unknown }>) => {
    setReturnGraphType(event.target.value as string);
  }; 

  const calcUnit = () => {
    labels = []

    for(let i = 1; i <= numberOfData; i++) {
      labels.push(`${i}??????`)
    }

    const distValues = data.datasets[0] && data.datasets[0].data
    if(typeof(distValues) === 'undefined' || distValues.length === 0){ return }

    let bulkBuyUnits: number[] = []
    let splitBuyUnits: number[] = []

    for(let i = 1; i <= numberOfData; i++) {
      bulkBuyUnits.push(money / Number(distValues[0]))
    }

    const splitValues = distValues.map((distValue) => { return (money / numberOfData) / Number(distValue)  })

    splitBuyUnits = splitValues.map((splitValue, index) => {
      if(index === 0) {
        return splitValue
      } else {
        return splitValue + splitValues.slice(0, index).reduce((a, b) => a + b)
      }
    })

    setReturnData({
      labels,
      datasets: [{
        label: '??????',
        data: bulkBuyUnits,
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 1,
        tension: 0
      },{
        label: '??????(????????????????????????)',
        data: splitBuyUnits,
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
        borderColor: 'rgba(255, 159, 64, 0.8)',
        borderWidth: 1,
        tension: 0
      }]
    })
  }

  useEffect(() => {
    calcUnit()
  }, [])

  useEffect(() => {
    calcUnit()
  }, [money, data])

  const valueOf35YearsLater = () => {
    return data.datasets[0] && data.datasets[0].data.slice(-1)[0]
  }

  const lastOfBulkUnit = () => {
    return returnData.datasets[0] && returnData.datasets[0].data.slice(-1)[0]
  }

  const lastOfSplitUnit = () => {
    return returnData.datasets[1] && returnData.datasets[1].data.slice(-1)[0]
  }

  const bulkUnit2money = () => {
    return Number(valueOf35YearsLater()) * Number(lastOfBulkUnit())
  }

  const splitUnit2money = () => {
    return Number(valueOf35YearsLater()) * Number(lastOfSplitUnit())
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <h2>????????????????????????(???)</h2>
        <Box mt={4}>
          <form action="" onSubmit={handleStockSubmit}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box component="div" width="18%">
                <TextField type="number" id="js-number-of-data"  label="??????(35)"   defaultValue={defaultNumberOfData}  />
              </Box>
              <Box component="div" width="18%">
                <TextField type="number" id="js-dist-data"       label="????????????(10)" defaultValue={defaultDistData}   />
              </Box>
              <Box component="div" width="18%">
                <TextField type="number" id="js-number-of-digit" label="???(100)"    defaultValue={defaultNumberOfDigit} />
              </Box>
              <Box component="div" width="18%">
                <TextField type="number" id="js-offset"  label="???????????????"   defaultValue={defaultOffset}  />
              </Box>
              <Box component="div" width="18%">
                <TextField type="number" id="js-growth-rate"       label="?????????(3%)" defaultValue={defaultGrowthRate}   />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
              <Box component="div" width="18%">
                <Select
                  value={graphType}
                  onChange={handleGraphTypeChange}
                >
                  <MenuItem value={'bar'}>????????????</MenuItem>
                  <MenuItem value={'line'}>?????????</MenuItem>
                </Select>
              </Box>
              <Box component="div" width="10%">
                <Button variant="contained" color="primary" type="submit">??????</Button>
              </Box>
            </Box>
          </form>
        </Box>
        <Box mt={4}>
          <StockGraph data={data} options={options} type={graphType}/>
        </Box>
        <h2>???????????????</h2>
        <Box mt={4}>
          <form action="" onSubmit={handleItemSubmit}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box component="div" width="40%">
                <TextField type="number" id="js-money"            label="????????????"   defaultValue="100000"  />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
              <Box component="div" width="18%">
                <Select
                  value={returnGraphType}
                  onChange={handleReturnGraphTypeChange}
                >
                  <MenuItem value={'bar'}>????????????</MenuItem>
                  <MenuItem value={'line'}>?????????</MenuItem>
                </Select>
              </Box>
              <Box component="div" width="10%">
                <Button variant="contained" color="primary" type="submit">??????</Button>
              </Box>
            </Box>
          </form>
        </Box>
        <Box mt={4}>
          <div>
            <p>{numberOfData} ?????????????????????: { Math.ceil(bulkUnit2money()) }??? ({ Math.ceil(100 * ( bulkUnit2money() / money)) }%)</p>
            <p>{numberOfData} ?????????????????????(???????????????): { Math.ceil(splitUnit2money()) }??? ({ Math.ceil(100 * ( splitUnit2money() / money)) }%)</p>
          </div>
          <ReturnGraph data={returnData} options={options} type={returnGraphType}/>
        </Box>
      </Container>
    </React.Fragment>
  )
}
