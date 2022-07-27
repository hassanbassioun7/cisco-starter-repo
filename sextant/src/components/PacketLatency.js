import { useEffect, useState } from 'react';
const websocket = new WebSocket('ws://localhost:55455');

function PacketLatency() {
  const [latency, setLatency] = useState('--');

  useEffect(()=>{
    websocket.onmessage = (e) => {
      setLatency(new Date().getTime() - e.data);
    }
  })

  return (
    <div>
        { latency } ms
    </div>
  )
}

export default PacketLatency;