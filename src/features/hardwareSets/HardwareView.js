import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHardwareSets } from './hardwareSlice'

export const HardwareView = () => {
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
    <div>
      <h2>Hardware Data</h2>
      {hardware.loading && <div>Loading.....</div>}
      {!hardware.loading && hardware.error ? <div> Error: {hardware.error}</div> : null}
      {!hardware.loading && !isEmptyObject(hardware.hardwareSet1) ? (
        <div>
            <h3>Hardware Set 1:</h3>
            <h5>Capacity: {JSON.stringify(hardware.hardwareSet1.capacity)}</h5>
            <h5>Availability: {JSON.stringify(hardware.hardwareSet1.availability)}</h5>
        </div>
      ) : null
      }
      {!hardware.loading && !isEmptyObject(hardware.hardwareSet2) ? (
        <div>
        <h3>Hardware Set 2:</h3>
        <h5>Capacity: {JSON.stringify(hardware.hardwareSet2.capacity)}</h5>
        <h5>Availability: {JSON.stringify(hardware.hardwareSet2.availability)}</h5>
    </div>
      ) : null
      }
    </div>
  )
}
