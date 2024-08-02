import smartMeter from '../src/devices-data/dados_1.json'
import smartemp from '../src/devices-data/dados_2.json'

const devices = [smartMeter, smartemp]

const routes = devices.map((data) => {
  return {
    path: `/devices/${data.device.name}`,
    name: data.device.name,
    device: data,
  }
})

export default routes
