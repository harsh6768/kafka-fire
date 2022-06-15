
const { Kafka }=require('kafkajs')

const producerFunc=async ()=>{
    const kafka=new Kafka({
        clientId : 'kafka-fire',
        brokers : ["localhost:9092"]
    })
    
    const consumer = kafka.consumer({ groupId: 'test-group' })

await consumer.connect()
await consumer.subscribe({ topic: 'kfk-fire', fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
      console.log("Message >>>",message)
    console.log({
      value: message.value.toString(),
    })
  },
})

}

producerFunc()
