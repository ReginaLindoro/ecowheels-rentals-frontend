import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHardwareSets } from './hardwareSlice'

export const HardwareView = ({setType}) => {
  const hardware = useSelector((state) => state.hardware)
  const dispatch = useDispatch()
  //only want to run in component mount, 
  //that's why empty array
  useEffect(() => {
    dispatch(fetchHardwareSets())
  }, [])

  function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}'
  }

  return (
    <div className="hwset">
      {hardware.loading && <div>Loading.....</div>}
      {!hardware.loading && hardware.error ? <div> Error: {hardware.error}</div> : null}
      {!hardware.loading &&  setType === 'hwset1' && !isEmptyObject(hardware.hardwareSet1) ? (
        <div>
            <p>{JSON.stringify(hardware.hardwareSet1.capacity)}</p>
            <p>CAPACITY</p>
            <p>{JSON.stringify(hardware.hardwareSet1.availability)}</p>
            <p>AVAILABILITY</p>
        </div>
      ) : null
      }
      {!hardware.loading && setType === 'hwset2' && !isEmptyObject(hardware.hardwareSet2) ? (
        <div>
        <p>{JSON.stringify(hardware.hardwareSet2.capacity)}</p>
            <p>CAPACITY</p>
            <p>{JSON.stringify(hardware.hardwareSet2.availability)}</p>
            <p>AVAILABILITY</p>
    </div>
      ) : null
      }
    </div>
  )
}
